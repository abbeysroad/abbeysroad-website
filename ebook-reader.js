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
    pageAspect: 0.707, // Width / Height ratio (standard book page ratio)
    pageCanvases: [],
    pageTextLayers: [],
    pageWidth: 0,
    pageHeight: 0,
    flipBookInstance: null,
    mobileObserver: null,
    
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

    window.addEventListener('resize', debounce(() => {
      EBookState.isMobile = window.innerWidth <= 768;
      if (EBookState.pdfDoc && document.getElementById('ebook-modal-overlay')?.classList.contains('active')) {
        recalculateAndRender();
      }
    }, 150));
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
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
          
          <!-- TOP CONTROL HEADER BAR -->
          <header id="ebook-top-bar" class="ebook-top-bar">
            <!-- Left: Title & Logo (Desktop Only) -->
            <div class="ebook-header-title-box">
              <svg class="ebook-header-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span class="ebook-header-title">${EBookState.bookTitle}</span>
            </div>

            <!-- Center: Controls & Mode Switcher -->
            <div class="ebook-header-controls">
              <!-- Flip Direction Switcher Button (Mobile/Tablet Only) -->
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>

              <button id="ebook-bookmarks-list-btn" class="ebook-action-btn" title="Saved Bookmarks">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>

              <button id="ebook-fullscreen-btn" class="ebook-action-btn" title="Toggle Full Screen">
                <svg id="ebook-fullscreen-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </button>

              <button id="ebook-close-btn" class="ebook-action-btn ebook-close-btn" title="Close eBook Reader">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          <!-- MAIN EBOOK STAGE / VIEWPORT -->
          <main id="ebook-viewport" class="ebook-viewport">
            <!-- DESKTOP SIDE NAVIGATION ARROWS -->
            <button id="ebook-nav-prev" class="ebook-nav-arrow ebook-nav-prev" aria-label="Previous Page" title="Previous Page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div id="ebook-flip-container" class="stpageflip-stage">
              <!-- Rendered pages injected dynamically -->
            </div>

            <button id="ebook-nav-next" class="ebook-nav-arrow ebook-nav-next" aria-label="Next Page" title="Next Page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
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
    let lastHandled = 0;
    function handleTrigger(e) {
      const now = Date.now();
      if (now - lastHandled < 300) return; // Prevent double trigger on touchend + click
      const trigger = e.target.closest('#open-ebook-btn, .ebook-trigger-btn');
      if (trigger) {
        lastHandled = now;
        e.preventDefault();
        e.stopPropagation();
        openEBookModal();
      }
    }

    document.addEventListener('click', handleTrigger);
    document.addEventListener('touchend', handleTrigger, { passive: false });
  }

  function bindModalEvents() {
    const closeBtn = document.getElementById('ebook-close-btn');
    const fullscreenBtn = document.getElementById('ebook-fullscreen-btn');
    const bookmarkPageBtn = document.getElementById('ebook-bookmark-page-btn');
    const bookmarksListBtn = document.getElementById('ebook-bookmarks-list-btn');
    const flipModeBtn = document.getElementById('ebook-flip-mode-btn');

    const drawerCloseBtn = document.getElementById('ebook-drawer-close-btn');
    const gestureModal = document.getElementById('ebook-gesture-modal');
    const gestureConfirmBtn = document.getElementById('ebook-gesture-confirm-btn');
    const tutorialCloseBtn = document.getElementById('ebook-tutorial-close-btn');
    const navPrevBtn = document.getElementById('ebook-nav-prev');
    const navNextBtn = document.getElementById('ebook-nav-next');
    const modalContainer = document.getElementById('ebook-modal-container');
    const topBar = document.getElementById('ebook-top-bar');

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeEBookModal();
      });
      closeBtn.addEventListener('touchend', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeEBookModal();
      });
    }

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFullscreen();
      });
    }

    if (bookmarkPageBtn) {
      bookmarkPageBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        bookmarkCurrentPage();
      });
    }

    if (bookmarksListBtn) {
      bookmarksListBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmarksDrawer();
      });
    }

    if (flipModeBtn) {
      flipModeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openGestureModal();
      });
    }

    if (navPrevBtn) {
      navPrevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (EBookState.flipBookInstance && EBookState.flipBookInstance.flipPrev) {
          EBookState.flipBookInstance.flipPrev();
        } else if (EBookState.currentPage > 1) {
          jumpToPage(EBookState.currentPage - (EBookState.isMobile ? 1 : 2));
        }
      });
    }

    if (navNextBtn) {
      navNextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (EBookState.flipBookInstance && EBookState.flipBookInstance.flipNext) {
          EBookState.flipBookInstance.flipNext();
        } else if (EBookState.currentPage < EBookState.totalPages) {
          jumpToPage(EBookState.currentPage + (EBookState.isMobile ? 1 : 2));
        }
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', function () {
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    }

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

    function handleFullscreenTopHover(clientY) {
      if (modalContainer.classList.contains('is-fullscreen') && clientY <= 48) {
        revealTopBar();
      }
    }

    if (modalContainer) {
      modalContainer.addEventListener('mousemove', function (e) {
        handleFullscreenTopHover(e.clientY);
      });

      modalContainer.addEventListener('touchstart', function (e) {
        if (e.touches && e.touches[0]) {
          handleFullscreenTopHover(e.touches[0].clientY);
        }
      }, { passive: true });
    }

    if (topBar) {
      topBar.addEventListener('mouseenter', revealTopBar);
      topBar.addEventListener('touchstart', revealTopBar, { passive: true });
    }

    document.addEventListener('selectionchange', handleTextSelection);
  }

  function revealTopBar() {
    const topBar = document.getElementById('ebook-top-bar');
    if (!topBar) return;
    topBar.classList.add('header-visible');
    clearTimeout(EBookState.headerHideTimer);
    EBookState.headerHideTimer = setTimeout(() => {
      if (!topBar.matches(':hover')) {
        topBar.classList.remove('header-visible');
      }
    }, 4000);
  }


  /* ==========================================================================
     2. OPEN & CLOSE E-BOOK MODAL
     ========================================================================== */
  function openEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    if (!modalOverlay) return;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Pause Lenis smooth scroll if present to prevent page scrolling behind modal
    if (window.lenis && typeof window.lenis.stop === 'function') {
      window.lenis.stop();
    }

    EBookState.isMobile = window.innerWidth <= 768;
    updateFlipModeLabel();

    if (!EBookState.pdfDoc) {
      loadPDFDocument();
    } else {
      recalculateAndRender();
    }
  }

  function closeEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    if (!modalOverlay) return;

    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';

    // Resume Lenis smooth scroll if present
    if (window.lenis && typeof window.lenis.start === 'function') {
      window.lenis.start();
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }

    const container = document.getElementById('ebook-modal-container');
    if (container) {
      container.classList.remove('is-fullscreen');
    }
    updateFullscreenIcon(false);

    // Clean up popovers / drawers / gesture overlays
    const popover = document.getElementById('ebook-text-popover');
    if (popover) popover.remove();

    const drawer = document.getElementById('ebook-bookmarks-drawer');
    if (drawer) drawer.classList.remove('open');

    const gestureModal = document.getElementById('ebook-gesture-modal');
    if (gestureModal) gestureModal.classList.remove('active');

    const tutorialOverlay = document.getElementById('ebook-tutorial-overlay');
    if (tutorialOverlay) tutorialOverlay.classList.remove('active');
  }

  function loadPDFDocument() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = `
      <div style="color: #FFD85F; font-family: 'Marcellus', serif; text-align: center; padding: 40px;">
        <div style="font-size: 1.3rem; margin-bottom: 12px;">Loading Philippines Travel Guide...</div>
        <div style="font-size: 0.85rem; color: #C3F8FE;">Preparing realistic 3D flipbook pages...</div>
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
     3. CALCULATE EXACT BOUNDS & RENDER PDF PAGES WITHOUT CLIPPING OR DISTORTION
     ========================================================================== */
  function computePageDimensions() {
    const viewport = document.getElementById('ebook-viewport');
    if (!viewport) return;

    const box = viewport.getBoundingClientRect();
    const isFS = EBookState.isFullscreen;
    
    const paddingY = isFS ? 12 : 20;
    const paddingX = EBookState.isMobile ? 10 : 110;

    let availableH = box.height - paddingY;
    let availableW = box.width - paddingX;

    if (!EBookState.isMobile) {
      let maxPageW = availableW / 2;
      let maxPageH = availableH;

      if (maxPageW / maxPageH > EBookState.pageAspect) {
        EBookState.pageHeight = Math.floor(maxPageH);
        EBookState.pageWidth = Math.floor(maxPageH * EBookState.pageAspect);
      } else {
        EBookState.pageWidth = Math.floor(maxPageW);
        EBookState.pageHeight = Math.floor(maxPageW / EBookState.pageAspect);
      }
    } else {
      let maxPageW = availableW;
      let maxPageH = availableH;

      if (maxPageW / maxPageH > EBookState.pageAspect) {
        EBookState.pageHeight = Math.floor(maxPageH);
        EBookState.pageWidth = Math.floor(maxPageH * EBookState.pageAspect);
      } else {
        EBookState.pageWidth = Math.floor(maxPageW);
        EBookState.pageHeight = Math.floor(maxPageW / EBookState.pageAspect);
      }
    }
  }

  async function renderAllPages() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = '';

    EBookState.pageCanvases = [];
    EBookState.pageTextLayers = [];

    const firstPage = await EBookState.pdfDoc.getPage(1);
    const vp = firstPage.getViewport({ scale: 1.0 });
    EBookState.pageAspect = vp.width / vp.height;

    computePageDimensions();

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
    const unscaledVp = page.getViewport({ scale: 1.0 });
    const scale = (EBookState.pageHeight / unscaledVp.height) * (window.devicePixelRatio || 1.5);
    const viewport = page.getViewport({ scale: scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext('2d');
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;

    try {
      const textContent = await page.getTextContent();
      window.pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: page.getViewport({ scale: EBookState.pageHeight / unscaledVp.height }),
        textDivs: []
      });
    } catch (e) {
      console.warn(`Text layer render warning for page ${pageNum}:`, e);
    }
  }

  function recalculateAndRender() {
    computePageDimensions();
    const pages = document.querySelectorAll('.ebook-page-card');
    pages.forEach(p => {
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });
    renderFlipbook();
  }


  /* ==========================================================================
     4. STPAGEFLIP 3D FLIPBOOK & MOBILE STAGE WITH CLEAN STATE RESET
     ========================================================================== */
  function renderFlipbook() {
    const container = document.getElementById('ebook-flip-container');
    EBookState.isMobile = window.innerWidth <= 768;

    if (EBookState.flipBookInstance) {
      try { EBookState.flipBookInstance.destroy(); } catch (e) {}
      EBookState.flipBookInstance = null;
    }

    if (EBookState.mobileObserver) {
      EBookState.mobileObserver.disconnect();
      EBookState.mobileObserver = null;
    }

    if (EBookState.isMobile) {
      setupMobileStage();
    } else {
      setupDesktopSpreadStage();
    }

    updateNavArrowVisibility();
  }

  function setupDesktopSpreadStage() {
    const container = document.getElementById('ebook-flip-container');
    container.className = 'stpageflip-stage';
    container.style.display = 'block';

    const pages = container.querySelectorAll('.ebook-page-card');
    pages.forEach(p => {
      p.style.position = '';
      p.style.transform = '';
      p.style.opacity = '1';
      p.style.zIndex = '';
      p.style.display = 'block';
      p.style.top = '';
      p.style.left = '';
      p.style.margin = '';
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });

    if (window.StPageFlip && window.StPageFlip.PageFlip) {
      const pageFlip = new window.StPageFlip.PageFlip(container, {
        width: Math.round(EBookState.pageWidth),
        height: Math.round(EBookState.pageHeight),
        size: 'fixed',
        minWidth: 200,
        maxWidth: 1400,
        minHeight: 300,
        maxHeight: 1600,
        drawShadow: true,
        maxShadowOpacity: 0.8,
        showCover: true,
        usePortrait: false,
        flippingTime: 750,
        startPage: EBookState.currentPage - 1
      });

      pageFlip.loadFromHTML(pages);
      EBookState.flipBookInstance = pageFlip;

      pageFlip.on('flip', (e) => {
        EBookState.currentPage = e.data + 1;
        updatePageCounter();
        updateNavArrowVisibility();
      });
    } else {
      setupCSSDoublePageFallback();
    }
  }

  function setupCSSDoublePageFallback() {
    const container = document.getElementById('ebook-flip-container');
    container.style.display = 'flex';
    container.style.gap = '4px';

    const pages = Array.from(container.querySelectorAll('.ebook-page-card'));
    pages.forEach((p, idx) => {
      if (idx === EBookState.currentPage - 1 || idx === EBookState.currentPage) {
        p.style.display = 'block';
        p.style.opacity = '1';
      } else {
        p.style.display = 'none';
      }
    });
  }

  function setupMobileStage() {
    const container = document.getElementById('ebook-flip-container');
    const pages = Array.from(container.querySelectorAll('.ebook-page-card'));

    pages.forEach(p => {
      p.style.position = '';
      p.style.transform = 'none';
      p.style.opacity = '1';
      p.style.visibility = 'visible';
      p.style.zIndex = '';
      p.style.display = 'block';
      p.style.top = '';
      p.style.left = '';
      p.style.margin = '0 auto';
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });

    if (EBookState.mobileFlipMode === 'vertical') {
      container.className = 'ebook-mobile-vertical-stage';
      container.scrollTop = 0;

      EBookState.mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            EBookState.currentPage = parseInt(entry.target.dataset.pageNumber, 10);
            updatePageCounter();
          }
        });
      }, { root: container, threshold: 0.6 });

      pages.forEach(p => EBookState.mobileObserver.observe(p));

      if (EBookState.currentPage > 1 && pages[EBookState.currentPage - 1]) {
        setTimeout(() => {
          pages[EBookState.currentPage - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }

    } else {
      container.className = 'ebook-mobile-horizontal-stage';
      
      pages.forEach((p, idx) => {
        p.style.position = 'absolute';
        p.style.width = `${EBookState.pageWidth}px`;
        p.style.height = `${EBookState.pageHeight}px`;
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
          EBookState.currentPage++;
          setupMobileStage();
          updatePageCounter();
        } else if (diffX > 0 && EBookState.currentPage > 1) {
          EBookState.currentPage--;
          setupMobileStage();
          updatePageCounter();
        }
      }
    };
  }

  function updateNavArrowVisibility() {
    const prevBtn = document.getElementById('ebook-nav-prev');
    const nextBtn = document.getElementById('ebook-nav-next');
    if (!prevBtn || !nextBtn) return;

    if (EBookState.isMobile) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    prevBtn.style.display = EBookState.currentPage <= 1 ? 'none' : 'flex';
    nextBtn.style.display = EBookState.currentPage >= EBookState.totalPages ? 'none' : 'flex';
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
     6. FAST, LIQUID-SMOOTH FULLSCREEN TRANSITIONS
     ========================================================================== */
  function toggleFullscreen() {
    const container = document.getElementById('ebook-modal-container');
    const isFS = container.classList.contains('is-fullscreen');

    if (!isFS) {
      container.classList.add('is-fullscreen');
      EBookState.isFullscreen = true;
      updateFullscreenIcon(true);

      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => console.log("Fullscreen request:", err));
      }

      const seenIntro = localStorage.getItem(EBookState.fullscreenIntroKey);
      if (!seenIntro) {
        document.getElementById('ebook-tutorial-overlay').classList.add('active');
      }

      const topBar = document.getElementById('ebook-top-bar');
      topBar.classList.remove('header-visible');

      recalculateAndRender();
      requestAnimationFrame(() => recalculateAndRender());

    } else {
      container.classList.remove('is-fullscreen');
      EBookState.isFullscreen = false;
      updateFullscreenIcon(false);

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
      }

      recalculateAndRender();
      requestAnimationFrame(() => recalculateAndRender());
    }
  }

  function updateFullscreenIcon(isFS) {
    const btn = document.getElementById('ebook-fullscreen-btn');
    if (!btn) return;

    if (isFS) {
      btn.title = "Exit Full Screen";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"></path>
        </svg>
      `;
    } else {
      btn.title = "Toggle Full Screen";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      `;
    }
  }


  /* ==========================================================================
     7. TEXT SELECTION & BOOKMARKING SYSTEM
     ========================================================================== */
  function handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : '';

    const existing = document.getElementById('ebook-text-popover');
    if (existing) existing.remove();

    if (selectedText.length > 3) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

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

    listContainer.querySelectorAll('.ebook-bookmark-card').forEach(card => {
      card.addEventListener('click', function (e) {
        if (e.target.classList.contains('ebook-bm-delete')) return;
        const targetPage = parseInt(this.dataset.page, 10);
        jumpToPage(targetPage);
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    });

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
    EBookState.currentPage = Math.max(1, Math.min(pageNum, EBookState.totalPages));
    if (EBookState.flipBookInstance && EBookState.flipBookInstance.flip) {
      EBookState.flipBookInstance.flip(EBookState.currentPage - 1);
    } else {
      renderFlipbook();
    }
    updatePageCounter();
  }

  function updatePageCounter() {
    const counter = document.getElementById('ebook-page-counter');
    if (counter) {
      counter.textContent = `${EBookState.currentPage} of ${EBookState.totalPages || '--'}`;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEBookReader);
  } else {
    initEBookReader();
  }

})();
