/**
 * PANDORA TRAVEL - PHILIPPINES FLIPBOOK ENGINE (STPAGEFLIP)
 */

document.addEventListener('DOMContentLoaded', () => {
  let pageFlip = null;
  const totalPages = 10;
  
  const container = document.getElementById('flipbook-book');
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');
  const counter = document.getElementById('page-counter-text');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  function getPageDimensions() {
    const stage = document.querySelector('.flipbook-stage-container');
    const stageWidth = stage ? stage.clientWidth : window.innerWidth;
    const stageHeight = stage ? stage.clientHeight : window.innerHeight * 0.8;
    
    // Target spread is 16:9 (or two 8:9 pages side-by-side)
    let pageHeight = stageHeight;
    let pageWidth = Math.round(pageHeight * (8 / 9));

    if (pageWidth * 2 > stageWidth) {
      pageWidth = Math.round((stageWidth * 0.95) / 2);
      pageHeight = Math.round(pageWidth * (9 / 8));
    }

    return {
      width: Math.max(300, pageWidth),
      height: Math.max(400, pageHeight)
    };
  }

  function initFlipbook() {
    if (!window.StPageFlip || !window.StPageFlip.PageFlip) {
      console.warn('StPageFlip library not found, trying again...');
      setTimeout(initFlipbook, 300);
      return;
    }

    const dims = getPageDimensions();

    pageFlip = new window.StPageFlip.PageFlip(container, {
      width: dims.width,
      height: dims.height,
      size: 'fixed',
      minWidth: 260,
      maxWidth: 1200,
      minHeight: 360,
      maxHeight: 1400,
      drawShadow: true,
      maxShadowOpacity: 0.8,
      showCover: true,
      usePortrait: window.innerWidth < 768,
      flippingTime: 800,
      startPage: 0
    });

    const pages = container.querySelectorAll('.flip-page');
    pageFlip.loadFromHTML(pages);

    pageFlip.on('flip', (e) => {
      const pageIndex = e.data + 1;
      updatePageCounter(pageIndex);
    });

    updatePageCounter(1);
  }

  function updatePageCounter(currentPage) {
    if (!counter) return;
    if (currentPage === 1) {
      counter.textContent = `Cover (1/${totalPages})`;
    } else if (currentPage === totalPages) {
      counter.textContent = `Back (${totalPages}/${totalPages})`;
    } else {
      const left = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      const right = left + 1;
      counter.textContent = `Pages ${left}-${right} of ${totalPages}`;
    }
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (pageFlip) pageFlip.flipPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (pageFlip) pageFlip.flipNext();
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

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      if (pageFlip) pageFlip.flipPrev();
    } else if (e.key === 'ArrowRight') {
      if (pageFlip) pageFlip.flipNext();
    }
  });

  // Window Resize
  window.addEventListener('resize', () => {
    if (pageFlip) {
      const dims = getPageDimensions();
      pageFlip.updateFromHtml(container.querySelectorAll('.flip-page'));
    }
  });

  // Start initialization
  initFlipbook();
});
