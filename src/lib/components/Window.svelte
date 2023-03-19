<script type="ts">
  import { draggable } from "@neodrag/svelte";
  import { totalWindowsOpen } from "$lib/stores";

  export let title = "";
  export let url = "";

  let iframe;
  let userWindow;

  const handleClose = () => {
    userWindow.remove();
    totalWindowsOpen.update((n) => n - 1);
  };

  const handleLoad = () => {
    iframe.contentWindow.document.body.style.backgroundColor = "#BFBFBF";
  };

  let zIndex = 0;

  function setWindowZIndex() {
    const allWindows = document.querySelectorAll(".userWindow");
    let highestZIndex = 0;
    for (let i = 0; i < allWindows.length; i++) {
      const zIndexStr = window.getComputedStyle(allWindows[i]).zIndex;
      const zIndex = parseInt(zIndexStr);
      if (!isNaN(zIndex) && zIndex > highestZIndex) {
        highestZIndex = zIndex;
      }
    }
    zIndex = highestZIndex + 1;
  }

  // resize handle
  function handleDrag(event) {
    // get original size of window
    // add the difference between the original size and the new size
    // to the original size
    requestAnimationFrame(() => {
      const newWidth = event.x;
      const newHeight = event.y;

      const deltaX = newWidth - userWindow.clientWidth;
      const deltaY = newHeight - userWindow.clientHeight;

      userWindow.style.width = userWindow.clientWidth + deltaX + "px";
      userWindow.style.height = userWindow.clientHeight + deltaY + "px";
    });
  }

  function handleMouseDown() {
    setWindowZIndex();
  }

  $: {
    setWindowZIndex();
  }

  let windowWidth = 0;
  let windowHeight = 0;
</script>

<svelte:window bind:outerWidth={windowWidth} bind:outerHeight={windowHeight} />

<div
  class="userWindow absolute inline-block w-[500px] h-[400px] m-5 p-2 rounded-lg bg-white shadow-lg shadow-black"
  bind:this={userWindow}
  use:draggable={{ axis: "both", bounds: "parent", cancel: ".notDraggable" }}
  on:mousedown={handleMouseDown}
  style="z-index: {zIndex}; max-width: {windowWidth - 50}px; max-height: {windowHeight - 50}px;"
>
  <div
    class="titlebar absolute top-0 left-0 right-0 h-6 bg-[#5B5B5B] rounded-t-lg text-white text-center"
  >
    <div class="flex">
      <div
        class="title flex-grow overflow-hidden whitespace-nowrap text-ellipsis"
      >
        {title}
      </div>
      <div
        class="controls bg-transparent border-none text-white font-bold mr-2"
      >
        <button class="close" on:click={handleClose}>✕</button>
      </div>
    </div>
  </div>
  <div class="content absolute top-6 left-0 right-0 bottom-0 overflow-hidden">
    <iframe
      class="w-full h-full border-none"
      src={url}
      frameborder="0"
      allowfullscreen
      onload={handleLoad}
      {title}
      bind:this={iframe}
    />
    <div />
  </div>
  <div
    class="notDraggable cursor-move absolute z-50 bottom-0 right-0 w-4 h-4 rounded-br-lg bg-[#5B5B5B]"
    id="resizeHandle"
    on:dragend={(event) => handleDrag(event)}
  />
</div>
