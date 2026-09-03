/**
 * PANDORA TRAVEL - PHILIPPINES FLIPBOOK ENGINE
 * Supports StPageFlip 3D Page Turning + Fallback Interactive 2-Page Spread Engine,
 * Touch Swipes, Keyboard Navigation, Page Edge Clicking, and Responsive Auto-Scaling.
 */

document.addEventListener('DOMContentLoaded', () => {
  let pageFlip = null;
  let currentSpreadIndex = 0; // 0: Cover, 1: P2-3, 2: P4-5, 3: P6-7, 4: P8-9, 5: Back
  const totalPages = 10;
  const totalSpreads = 6;
  let isFallbackMode = false;

  const stage = document.querySelector('.flipbook-stage-container');
  const container = document.getElementById('flipbook-book');
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');
  const counter = document.getElementById('page-counter-text');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  function getDimensions() {
    const stageWidth = stage ? stage.clientWidth : window.innerWidth;
    const stageHeight = stage ? stage.clientHeight : window.innerHeight * 0.8;

    let pageHeight = Math.min(stageHeight, 740);
    let pageWidth = Math.round(pageHeight * (8 / 9.5));

    if (pageWidth * 2 > stageWidth * 0.95) {
      pageWidth = Math.round((stageWidth * 0.92) / 2);
      pageHeight = Math.round(pageWidth * (9.5 / 8));
    }

    return {
      pageWidth: Math.max(280, pageWidth),
      pageHeight: Math.max(380, pageHeight)
    };
  }

  function initFlipbook() {
    const PageFlipClass = (window.St && window.St.PageFlip) ||
                          (window.StPageFlip && window.StPageFlip.PageFlip) ||
                          window.StPageFlip ||
                          window.PageFlip;

    const dims = getDimensions();

    // Set page dimensions explicitly
    const pages = Array.from(container.querySelectorAll('.flip-page'));
    pages.forEach(p => {
      p.style.width = `${dims.pageWidth}px`;
      p.style.height = `${dims.pageHeight}px`;
    });

    if (PageFlipClass) {
      try {
        pageFlip = new PageFlipClass(container, {
          width: dims.pageWidth,
          height: dims.pageHeight,
          size: 'stretch',
          minWidth: 260,
          maxWidth: 900,
          minHeight: 350,
          maxHeight: 1200,
          drawShadow: true,
          maxShadowOpacity: 0.7,
          showCover: true,
          usePortrait: window.innerWidth < 768,
          flippingTime: 700,
          startPage: 0,
          clickEventForward: true,
          useMouseEvents: true
        });

        pageFlip.loadFromHTML(pages);

        pageFlip.on('flip', (e) => {
          const pageIndex = e.data + 1;
          updatePageCounter(pageIndex);
        });

        updatePageCounter(1);
        bindPageSurfaceEvents();
        return;
      } catch (err) {
        console.warn('StPageFlip init error, falling back to CSS Spread Engine:', err);
      }
    }

    // Fallback Spread Engine
    enableFallbackEngine(dims);
  }

  function enableFallbackEngine(dims) {
    isFallbackMode = true;
    container.classList.add('fallback-spread-mode');
    
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.position = 'relative';

    renderFallbackSpread();
    bindPageSurfaceEvents();
  }

  function renderFallbackSpread() {
    const pages = Array.from(container.querySelectorAll('.flip-page'));
    
    pages.forEach(p => {
      p.style.display = 'none';
      p.style.position = 'relative';
      p.style.transform = 'none';
      p.style.opacity = '1';
    });

    if (currentSpreadIndex === 0) {
      // Cover (Page 1)
      if (pages[0]) {
        pages[0].style.display = 'block';
        pages[0].style.borderRadius = '0 12px 12px 0';
      }
      updatePageCounter(1);
    } else if (currentSpreadIndex === totalSpreads - 1) {
      // Back Cover (Page 10)
      if (pages[9]) {
        pages[9].style.display = 'block';
        pages[9].style.borderRadius = '12px 0 0 12px';
      }
      updatePageCounter(10);
    } else {
      // Inside Spreads
      const leftPageIndex = (currentSpreadIndex - 1) * 2 + 1; // 1, 3, 5, 7
      const rightPageIndex = leftPageIndex + 1;             // 2, 4, 6, 8

      if (pages[leftPageIndex]) {
        pages[leftPageIndex].style.display = 'block';
        pages[leftPageIndex].style.borderRadius = '12px 0 0 12px';
      }
      if (pages[rightPageIndex]) {
        pages[rightPageIndex].style.display = 'block';
        pages[rightPageIndex].style.borderRadius = '0 12px 12px 0';
      }
      updatePageCounter(leftPageIndex + 1);
    }
  }

  function updatePageCounter(currentPage) {
    if (!counter) return;
    if (currentPage === 1) {
      counter.textContent = `Cover (1/${totalPages})`;
    } else if (currentPage >= totalPages) {
      counter.textContent = `Back (${totalPages}/${totalPages})`;
    } else {
      const left = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      const right = left + 1;
      counter.textContent = `Pages ${left}-${right} of ${totalPages}`;
    }
  }

  function flipNext() {
    if (pageFlip) {
      if (typeof pageFlip.flipNext === 'function') {
        pageFlip.flipNext();
      } else if (typeof pageFlip.turnToNextPage === 'function') {
        pageFlip.turnToNextPage();
      }
    } else if (isFallbackMode) {
      if (currentSpreadIndex < totalSpreads - 1) {
        currentSpreadIndex++;
        renderFallbackSpread();
      }
    }
  }

  function flipPrev() {
    if (pageFlip) {
      if (typeof pageFlip.flipPrev === 'function') {
        pageFlip.flipPrev();
      } else if (typeof pageFlip.turnToPrevPage === 'function') {
        pageFlip.turnToPrevPage();
      }
    } else if (isFallbackMode) {
      if (currentSpreadIndex > 0) {
        currentSpreadIndex--;
        renderFallbackSpread();
      }
    }
  }

  // Click Left / Right side of book stage to turn pages
  function bindPageSurfaceEvents() {
    stage.addEventListener('click', (e) => {
      // Avoid duplicate flips when StPageFlip's internal click listener is active
      if (!isFallbackMode) return;

      // Ignore clicks on buttons/links/inputs
      if (e.target.closest('button, a, input, select, .pandora-btn')) return;

      const rect = stage.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX > rect.width / 2) {
        flipNext();
      } else {
        flipPrev();
      }
    });

    // Touch Swipe Gestures
    let touchStartX = 0;
    let touchStartY = 0;

    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1) {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) {
            flipNext();
          } else {
            flipPrev();
          }
        }
      }
    }, { passive: true });
  }

  // Event Listeners for Header Controls & Cover Button
  if (prevBtn) prevBtn.addEventListener('click', flipPrev);
  if (nextBtn) nextBtn.addEventListener('click', flipNext);

  const tradeBtn = document.getElementById('trade-portfolio-btn');
  if (tradeBtn) {
    tradeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      flipNext();
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // Keyboard Arrow Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      flipPrev();
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      flipNext();
    }
  });

  // Window Resize
  window.addEventListener('resize', () => {
    const dims = getDimensions();
    const pages = Array.from(container.querySelectorAll('.flip-page'));
    pages.forEach(p => {
      p.style.width = `${dims.pageWidth}px`;
      p.style.height = `${dims.pageHeight}px`;
    });

    if (pageFlip) {
      try {
        pageFlip.updateFromHtml(container.querySelectorAll('.flip-page'));
      } catch (e) {}
    } else if (isFallbackMode) {
      renderFallbackSpread();
    }
  });

  // Start initialization
  setTimeout(initFlipbook, 100);
});
