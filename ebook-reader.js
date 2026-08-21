/**
 * ABBEY'S ROAD - INTERACTIVE 3D PDF E-BOOK READER ENGINE
 * PDF.js Canvas + Text Layer Rendering, Desktop 3D Page Flip,
 * Mobile Vertical/Horizontal Flip Modes with Gesture Overlays,
 * Text Highlight Bookmarking & Auto-Hiding Fullscreen Header.
 */

(function () {
  'use strict';

  // State Management
  const EBookState = {
    pdfDoc: null,
    pdfUrl: 'beyond-the-ordinary-discover-the-philippines_compressed.pdf',
    bookTitle: "Beyond the Ordinary: Discover the Philippines",
    totalPages: 0,
    currentPage: 1,
    pageAspect: 0.707, // Width / Height ratio (approx A4 / standard book)
    pageCanvases: [],
    pageTextLayers: [],
    pageImages: [],
    pageWidth: 0,
    pageHeight: 0,
    flipBookInstance: null,
    
    // Viewport & Mode Settings
    isMobile: window.innerWidth <= 768,
    mobileFlipMode: 'vertical', // 'vertical' (Upwards) or 'horizontal' (Sideways)
    isFullscreen: false,
    headerHideTimer: null,
    
    // Bookmarks Storage
    bookmarks: [],
    storageKey: 'abbey_ebook_bookmarks_philippines',
    fullscreenIntroKey: 'abbey_ebook_fullscreen_intro_seen'
  };

  // Ensure PDF.js worker is properly configured
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  /* ==========================================================================
     1. INITIALIZE & BUILD E-BOOK READER DOM STRUCTURE
     ========================================================================== */
  function initEBookReader() {
    loadBookmarksFromStorage();
    createModalDOM();
    bindTriggerEvents();
    bindModalEvents();
  }

  function loadBookmarksFromStorage() {
    try {
      const stored = localStorage.getItem(EBookState.storageKey);
      if (stored) {
        EBookState.bookmarks = JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load bookmarks from storage:", e);
    }
  }

  function saveBookmarksToStorage() {
    try {
      localStorage.setItem(EBookState.storageKey, JSON.stringify(EBookState.bookmarks));
    } catch (e) {
      console.warn("Could not save bookmarks to storage:", e);
    }
  }

  function createModalDOM() {
    if (document.getElementById('ebook-modal-overlay')) return;

    const modalHTML = `
      <div id="ebook-modal-overlay" class="ebook-modal-overlay" aria-hidden="true">
        <div id="ebook-modal-container" class="ebook-modal-container">
          
          <!-- Fullscreen Hotspot Trigger Area -->
          <div id="ebook-fullscreen-hotspot" class="ebook-fullscreen-top-hotspot"></div>

          <!-- TOP CONTROL HEADER BAR -->
          <header id="ebook-top-bar" class="ebook-top-bar">
            <!-- Left: Title & Logo -->
            <div class="ebook-header-title-box">
              <svg class="ebook-header-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span class="ebook-header-title">${EBookState.bookTitle}</span>
            </div>

            <!-- Center: Controls & Mode Switcher -->
            <div class="ebook-header-controls">
              <!-- Flip Direction Switcher Button (Mobile/Tablet Mode Selector) -->
              <button id="ebook-flip-mode-btn" class="ebook-btn-icon-text ebook-flip-mode-btn" title="Choose page flip movement">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/>
                </svg>
                <span id="ebook-flip-mode-label">Flip: Upward</span>
              </button>

              <!-- Page Counter Indicator -->
              <div id="ebook-page-counter" class="ebook-page-counter">Page 1 of --</div>
            </div>

            <!-- Right Actions: Bookmark, Fullscreen, Close -->
            <div class="ebook-header-right-actions">
              <button id="ebook-bookmark-page-btn" class="ebook-action-btn" title="Bookmark current page">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>

              <button id="ebook-bookmarks-list-btn" class="ebook-action-btn" title="Saved Bookmarks">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>

              <button id="ebook-fullscreen-btn" class="ebook-action-btn" title="Toggle Full Screen">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </button>

              <button id="ebook-close-btn" class="ebook-action-btn ebook-close-btn" title="Close eBook Reader">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          <!-- MAIN EBOOK STAGE / VIEWPORT -->
          <main id="ebook-viewport" class="ebook-viewport">
            <div id="ebook-flip-container" class="stpageflip-stage">
              <!-- Rendered pages injected dynamically -->
            </div>
          </main>

          <!-- BOOKMARKS SIDE DRAWER -->
          <aside id="ebook-bookmarks-drawer" class="ebook-bookmarks-drawer">
            <div class="ebook-drawer-header">
              <span class="ebook-drawer-title">Saved Bookmarks</span>
              <button id="ebook-drawer-close-btn" class="ebook-drawer-close">&times;</button>
            </div>
            <div id="ebook-bookmarks-list" class="ebook-bookmarks-list">
              <!-- Bookmark items dynamically injected -->
            </div>
          </aside>

          <!-- ANIMATED GESTURE MOVEMENT SELECTION OVERLAY -->
          <div id="ebook-gesture-modal" class="ebook-gesture-modal-overlay">
            <div class="ebook-gesture-modal-card">
              <h3 class="ebook-gesture-title">Choose Page Flip Movement</h3>
              <p class="ebook-gesture-subtitle">Select how you'd like to flip through pages on mobile or tablet</p>
              
              <div class="ebook-gesture-options-grid">
                <!-- Option 1: Vertical Upwards Flip -->
                <div id="gesture-opt-vertical" class="ebook-gesture-option-card selected" data-mode="vertical">
                  <div class="gesture-anim-box">
                    <div class="anim-arrow-up"></div>
                    <div class="anim-finger-up"></div>
                  </div>
                  <div class="gesture-opt-label">Upward Scroll / Flip</div>
                  <div class="gesture-opt-sub">Swipe up to flip pages</div>
                </div>

                <!-- Option 2: Horizontal Sideways Flip -->
                <div id="gesture-opt-horizontal" class="ebook-gesture-option-card" data-mode="horizontal">
                  <div class="gesture-anim-box">
                    <div class="anim-arrow-side"></div>
                    <div class="anim-finger-side"></div>
                  </div>
                  <div class="gesture-opt-label">Sideways Page Turn</div>
                  <div class="gesture-opt-sub">Swipe left/right like a book</div>
                </div>
              </div>

              <button id="ebook-gesture-confirm-btn" class="ebook-gesture-confirm-btn">Apply Flip Setting</button>
            </div>
          </div>

          <!-- FIRST-TIME FULLSCREEN INSTRUCTION OVERLAY -->
          <div id="ebook-tutorial-overlay" class="ebook-fullscreen-tutorial-overlay">
            <div class="ebook-tutorial-card">
              <div class="ebook-tutorial-top-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </div>
              <h3 class="ebook-tutorial-title">Top Controls Auto-Hidden</h3>
              <p class="ebook-tutorial-desc">
                In Full Screen mode, the header auto-hides for an immersive reading experience.<br><br>
                <strong>Tap or hover at the top edge of the screen</strong> to reveal navigation, bookmarking, and closing controls.
              </p>
              <button id="ebook-tutorial-close-btn" class="ebook-tutorial-btn">Got It, Start Reading</button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  function bindTriggerEvents() {
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('#open-ebook-btn, .ebook-trigger-btn');
      if (trigger) {
        e.preventDefault();
        openEBookModal();
      }
    });
  }

  function bindModalEvents() {
    const closeBtn = document.getElementById('ebook-close-btn');
    const fullscreenBtn = document.getElementById('ebook-fullscreen-btn');
    const bookmarkPageBtn = document.getElementById('ebook-bookmark-page-btn');
    const bookmarksListBtn = document.getElementById('ebook-bookmarks-list-btn');
    const drawerCloseBtn = document.getElementById('ebook-drawer-close-btn');
    const flipModeBtn = document.getElementById('ebook-flip-mode-btn');
    const gestureModal = document.getElementById('ebook-gesture-modal');
    const gestureConfirmBtn = document.getElementById('ebook-gesture-confirm-btn');
    const tutorialCloseBtn = document.getElementById('ebook-tutorial-close-btn');
    const hotspot = document.getElementById('ebook-fullscreen-hotspot');
    const topBar = document.getElementById('ebook-top-bar');
    const modalContainer = document.getElementById('ebook-modal-container');

    if (closeBtn) closeBtn.addEventListener('click', closeEBookModal);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

    if (bookmarkPageBtn) {
      bookmarkPageBtn.addEventListener('click', function () {
        bookmarkCurrentPage();
      });
    }

    if (bookmarksListBtn) {
      bookmarksListBtn.addEventListener('click', function () {
        toggleBookmarksDrawer();
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', function () {
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    }

    // Flip Mode Selector Modal
    if (flipModeBtn) {
      flipModeBtn.addEventListener('click', function () {
        openGestureModal();
      });
    }

    // Gesture option card selection
    document.querySelectorAll('.ebook-gesture-option-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.ebook-gesture-option-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
      });
    });

    if (gestureConfirmBtn) {
      gestureConfirmBtn.addEventListener('click', function () {
        const selectedCard = document.querySelector('.ebook-gesture-option-card.selected');
        if (selectedCard) {
          const mode = selectedCard.getAttribute('data-mode');
          setFlipMode(mode);
        }
        gestureModal.classList.remove('active');
      });
    }

    if (tutorialCloseBtn) {
      tutorialCloseBtn.addEventListener('click', function () {
        document.getElementById('ebook-tutorial-overlay').classList.remove('active');
        localStorage.setItem(EBookState.fullscreenIntroKey, 'true');
      });
    }

    // Auto-hide Top Header in Fullscreen Mode
    function revealTopBar() {
      if (modalContainer.classList.contains('is-fullscreen')) {
        topBar.classList.add('header-visible');
        clearTimeout(EBookState.headerHideTimer);
        EBookState.headerHideTimer = setTimeout(() => {
          topBar.classList.remove('header-visible');
        }, 3500);
      }
    }

    if (hotspot) hotspot.addEventListener('mousemove', revealTopBar);
    if (hotspot) hotspot.addEventListener('touchstart', revealTopBar);
    if (topBar) topBar.addEventListener('mousemove', revealTopBar);

    // Text selection listener for bookmarking text quotes
    document.addEventListener('selectionchange', handleTextSelection);
  }


  /* ==========================================================================
     2. OPEN & LOAD PDF DOCUMENT
     ========================================================================== */
  function openEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update state mobile status
    EBookState.isMobile = window.innerWidth <= 768;
    updateFlipModeLabel();

    if (!EBookState.pdfDoc) {
      loadPDFDocument();
    } else {
      renderFlipbook();
    }
  }

  function closeEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }
    const container = document.getElementById('ebook-modal-container');
    container.classList.remove('is-fullscreen');
  }

  function loadPDFDocument() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = `
      <div style="color: #FFD85F; font-family: 'Marcellus', serif; text-align: center; padding: 40px;">
        <div style="font-size: 1.5rem; margin-bottom: 12px;">Loading Philippines Travel Guide...</div>
        <div style="font-size: 0.9rem; color: #C3F8FE;">Preparing realistic 3D flipbook pages...</div>
      </div>
    `;

    if (!window.pdfjsLib) {
      console.error("PDF.js library not loaded.");
      container.innerHTML = `<div style="color:#F87171; padding:20px;">PDF Renderer Error. PDF.js CDN unavailable.</div>`;
      return;
    }

    window.pdfjsLib.getDocument(EBookState.pdfUrl).promise.then(pdf => {
      EBookState.pdfDoc = pdf;
      EBookState.totalPages = pdf.numPages;
      updatePageCounter();
      renderAllPages();
    }).catch(err => {
      console.error("Error loading PDF:", err);
      container.innerHTML = `<div style="color:#F87171; padding:20px;">Failed to load PDF file: ${err.message}</div>`;
    });
  }


  /* ==========================================================================
     3. RENDER ALL PDF PAGES TO CANVAS & TEXT LAYERS
     ========================================================================== */
  async function renderAllPages() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = '';

    EBookState.pageCanvases = [];
    EBookState.pageTextLayers = [];

    // Calculate dimensions
    const viewportBox = document.getElementById('ebook-viewport').getBoundingClientRect();
    const targetHeight = Math.min(viewportBox.height - 40, 850);
    
    // First page to determine aspect ratio
    const firstPage = await EBookState.pdfDoc.getPage(1);
    const vp = firstPage.getViewport({ scale: 1.0 });
    EBookState.pageAspect = vp.width / vp.height;

    EBookState.pageHeight = targetHeight;
    EBookState.pageWidth = targetHeight * EBookState.pageAspect;

    const renderPromises = [];

    for (let pageNum = 1; pageNum <= EBookState.totalPages; pageNum++) {
      const pageCard = document.createElement('div');
      pageCard.className = 'ebook-page-card';
      pageCard.dataset.pageNumber = pageNum;
      pageCard.style.width = `${EBookState.pageWidth}px`;
      pageCard.style.height = `${EBookState.pageHeight}px`;

      const canvas = document.createElement('canvas');
      const textLayerDiv = document.createElement('div');
      textLayerDiv.className = 'ebook-text-layer';

      pageCard.appendChild(canvas);
      pageCard.appendChild(textLayerDiv);
      container.appendChild(pageCard);

      renderPromises.push(renderSinglePage(pageNum, canvas, textLayerDiv));
    }

    await Promise.all(renderPromises);
    renderFlipbook();
  }

  async function renderSinglePage(pageNum, canvas, textLayerDiv) {
    const page = await EBookState.pdfDoc.getPage(pageNum);
    const scale = (EBookState.pageHeight / page.getViewport({ scale: 1.0 }).height) * (window.devicePixelRatio || 1.5);
    const viewport = page.getViewport({ scale: scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext('2d');
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;

    // Render Text Layer for native selection
    try {
      const textContent = await page.getTextContent();
      window.pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: page.getViewport({ scale: EBookState.pageHeight / page.getViewport({ scale: 1.0 }).height }),
        textDivs: []
      });
    } catch (e) {
      console.warn(`Text layer render warning for page ${pageNum}:`, e);
    }
  }


  /* ==========================================================================
     4. STPAGEFLIP 3D FLIPBOOK & MOBILE MODES
     ========================================================================== */
  function renderFlipbook() {
    const container = document.getElementById('ebook-flip-container');
    EBookState.isMobile = window.innerWidth <= 768;

    if (EBookState.flipBookInstance) {
      try { EBookState.flipBookInstance.destroy(); } catch (e) {}
      EBookState.flipBookInstance = null;
    }

    if (EBookState.isMobile) {
      setupMobileStage();
    } else {
      setupDesktopSpreadStage();
    }
  }

  // DESKTOP & TABLET: 2-PAGE SPREAD 3D FLIPBOOK (MATCHING REFERENCE VIDEO)
  function setupDesktopSpreadStage() {
    const container = document.getElementById('ebook-flip-container');
    container.className = 'stpageflip-stage';
    container.style.display = 'block';

    const pages = container.querySelectorAll('.ebook-page-card');
    pages.forEach(p => {
      p.style.position = '';
      p.style.transform = '';
      p.style.margin = '';
    });

    if (window.StPageFlip && window.StPageFlip.PageFlip) {
      const pageFlip = new window.StPageFlip.PageFlip(container, {
        width: Math.round(EBookState.pageWidth),
        height: Math.round(EBookState.pageHeight),
        size: 'fixed',
        minWidth: 300,
        maxWidth: 1000,
        minHeight: 400,
        maxHeight: 1200,
        drawShadow: true,
        maxShadowOpacity: 0.8,
        showCover: true,
        usePortrait: false,
        flippingTime: 800,
        startPage: EBookState.currentPage - 1
      });

      pageFlip.loadFromHTML(pages);
      EBookState.flipBookInstance = pageFlip;

      pageFlip.on('flip', (e) => {
        EBookState.currentPage = e.data + 1;
        updatePageCounter();
      });
    } else {
      // Fallback CSS 3D Double Page Flip Engine
      setupCSSDoublePageFallback();
    }
  }

  function setupCSSDoublePageFallback() {
    const container = document.getElementById('ebook-flip-container');
    container.style.display = 'flex';
    container.style.gap = '4px';
    container.style.perspective = '2000px';

    const pages = Array.from(container.querySelectorAll('.ebook-page-card'));
    pages.forEach((p, idx) => {
      if (idx === EBookState.currentPage - 1 || idx === EBookState.currentPage) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });
  }

  // MOBILE: DUAL MODE (UPWARD FLIP OR SIDEWAYS FLIP)
  function setupMobileStage() {
    const container = document.getElementById('ebook-flip-container');

    if (EBookState.mobileFlipMode === 'vertical') {
      // UPWARD SCROLL / FLIP MODE
      container.className = 'ebook-mobile-vertical-stage';
      const pages = container.querySelectorAll('.ebook-page-card');
      pages.forEach(p => {
        p.style.display = 'block';
        p.style.position = 'relative';
      });

      // Observer for active page in vertical scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            EBookState.currentPage = parseInt(entry.target.dataset.pageNumber, 10);
            updatePageCounter();
          }
        });
      }, { root: container, threshold: 0.6 });

      pages.forEach(p => observer.observe(p));

    } else {
      // SIDEWAYS FLIP MODE
      container.className = 'ebook-mobile-horizontal-stage';
      const pages = Array.from(container.querySelectorAll('.ebook-page-card'));
      
      pages.forEach((p, idx) => {
        p.style.position = 'absolute';
        if (idx === EBookState.currentPage - 1) {
          p.style.transform = 'translateX(0) scale(1)';
          p.style.opacity = '1';
          p.style.zIndex = '10';
        } else if (idx < EBookState.currentPage - 1) {
          p.style.transform = 'translateX(-100%) scale(0.9)';
          p.style.opacity = '0';
          p.style.zIndex = '1';
        } else {
          p.style.transform = 'translateX(100%) scale(0.9)';
          p.style.opacity = '0';
          p.style.zIndex = '1';
        }
      });

      // Touch swipe handler for horizontal flip
      setupTouchSwipe(container);
    }
  }

  function setupTouchSwipe(element) {
    let startX = 0;
    let startY = 0;

    element.ontouchstart = function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    element.ontouchend = function (e) {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0 && EBookState.currentPage < EBookState.totalPages) {
          // Swipe Left -> Next Page
          EBookState.currentPage++;
          setupMobileStage();
          updatePageCounter();
        } else if (diffX > 0 && EBookState.currentPage > 1) {
          // Swipe Right -> Prev Page
          EBookState.currentPage--;
          setupMobileStage();
          updatePageCounter();
        }
      }
    };
  }


  /* ==========================================================================
     5. MODE SWITCHER & GESTURE SELECTION OVERLAY
     ========================================================================== */
  function openGestureModal() {
    const modal = document.getElementById('ebook-gesture-modal');
    modal.classList.add('active');

    document.querySelectorAll('.ebook-gesture-option-card').forEach(card => {
      if (card.getAttribute('data-mode') === EBookState.mobileFlipMode) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  }

  function setFlipMode(mode) {
    EBookState.mobileFlipMode = mode;
    updateFlipModeLabel();
    renderFlipbook();
  }

  function updateFlipModeLabel() {
    const label = document.getElementById('ebook-flip-mode-label');
    if (label) {
      label.textContent = EBookState.mobileFlipMode === 'vertical' ? 'Flip: Upward' : 'Flip: Sideways';
    }
  }


  /* ==========================================================================
     6. FULLSCREEN MODE & AUTO-HIDING TOP BAR
     ========================================================================== */
  function toggleFullscreen() {
    const container = document.getElementById('ebook-modal-container');
    const isFS = container.classList.contains('is-fullscreen');

    if (!isFS) {
      container.classList.add('is-fullscreen');
      EBookState.isFullscreen = true;

      // Trigger fullscreen API if available
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => console.log("Fullscreen request:", err));
      }

      // Check first time instructions
      const seenIntro = localStorage.getItem(EBookState.fullscreenIntroKey);
      if (!seenIntro) {
        document.getElementById('ebook-tutorial-overlay').classList.add('active');
      }

      // Auto-hide top bar after 3s
      const topBar = document.getElementById('ebook-top-bar');
      topBar.classList.remove('header-visible');

    } else {
      container.classList.remove('is-fullscreen');
      EBookState.isFullscreen = false;
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
      }
    }
  }


  /* ==========================================================================
     7. TEXT SELECTION & BOOKMARKING SYSTEM
     ========================================================================== */
  function handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : '';

    // Remove existing popover
    const existing = document.getElementById('ebook-text-popover');
    if (existing) existing.remove();

    if (selectedText.length > 3) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Ensure selection is inside reader
      const textLayer = range.commonAncestorContainer.parentElement?.closest('.ebook-text-layer');
      if (!textLayer) return;

      const pageCard = textLayer.closest('.ebook-page-card');
      const pageNum = pageCard ? parseInt(pageCard.dataset.pageNumber, 10) : EBookState.currentPage;

      const popover = document.createElement('div');
      popover.id = 'ebook-text-popover';
      popover.className = 'ebook-text-selection-popover';
      popover.style.top = `${rect.top}px`;
      popover.style.left = `${rect.left + (rect.width / 2)}px`;
      popover.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Bookmark Selected Text</span>
      `;

      popover.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        addBookmark({
          type: 'text',
          page: pageNum,
          snippet: `"${selectedText.substring(0, 110)}${selectedText.length > 110 ? '...' : ''}"`,
          date: new Date().toLocaleDateString()
        });
        popover.remove();
        selection.removeAllRanges();
      });

      document.body.appendChild(popover);
    }
  }

  function bookmarkCurrentPage() {
    addBookmark({
      type: 'page',
      page: EBookState.currentPage,
      snippet: `Page ${EBookState.currentPage} - Full Page Bookmark`,
      date: new Date().toLocaleDateString()
    });
  }

  function addBookmark(item) {
    // Avoid duplicate page bookmarks
    const exists = EBookState.bookmarks.some(b => b.type === item.type && b.page === item.page && b.snippet === item.snippet);
    if (!exists) {
      EBookState.bookmarks.unshift(item);
      saveBookmarksToStorage();
      renderBookmarksList();
      showToast(`Bookmarked Page ${item.page}`);
    } else {
      showToast(`Already Bookmarked`);
    }
  }

  function toggleBookmarksDrawer() {
    const drawer = document.getElementById('ebook-bookmarks-drawer');
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      renderBookmarksList();
    }
  }

  function renderBookmarksList() {
    const listContainer = document.getElementById('ebook-bookmarks-list');
    if (!listContainer) return;

    if (EBookState.bookmarks.length === 0) {
      listContainer.innerHTML = `<div class="ebook-no-bookmarks">No bookmarks saved yet.<br>Click the bookmark icon or highlight text on any page!</div>`;
      return;
    }

    listContainer.innerHTML = EBookState.bookmarks.map((bm, index) => `
      <div class="ebook-bookmark-card" data-page="${bm.page}">
        <button class="ebook-bm-delete" data-index="${index}" title="Remove bookmark">&times;</button>
        <div class="ebook-bm-page">PAGE ${bm.page} • ${bm.type.toUpperCase()}</div>
        <div class="ebook-bm-snippet">${bm.snippet}</div>
      </div>
    `).join('');

    // Jump to page on click
    listContainer.querySelectorAll('.ebook-bookmark-card').forEach(card => {
      card.addEventListener('click', function (e) {
        if (e.target.classList.contains('ebook-bm-delete')) return;
        const targetPage = parseInt(this.dataset.page, 10);
        jumpToPage(targetPage);
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    });

    // Delete bookmark button
    listContainer.querySelectorAll('.ebook-bm-delete').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const index = parseInt(this.dataset.index, 10);
        EBookState.bookmarks.splice(index, 1);
        saveBookmarksToStorage();
        renderBookmarksList();
      });
    });
  }

  function jumpToPage(pageNum) {
    EBookState.currentPage = pageNum;
    if (EBookState.flipBookInstance && EBookState.flipBookInstance.flip) {
      EBookState.flipBookInstance.flip(pageNum - 1);
    } else {
      renderFlipbook();
    }
    updatePageCounter();
  }

  function updatePageCounter() {
    const counter = document.getElementById('ebook-page-counter');
    if (counter) {
      counter.textContent = `Page ${EBookState.currentPage} of ${EBookState.totalPages || '--'}`;
    }
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      background: #FFD85F;
      color: #202B22;
      font-weight: 700;
      padding: 10px 24px;
      border-radius: 30px;
      z-index: 99999;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      font-size: 0.85rem;
      animation: fadeInOut 2.5s forwards;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEBookReader);
  } else {
    initEBookReader();
  }

})();
