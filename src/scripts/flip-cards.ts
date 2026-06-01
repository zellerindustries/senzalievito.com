export function initFlipBoxes(): void {
  const flipBoxes = document.querySelectorAll<HTMLElement>(".box-flip");

  if (flipBoxes.length === 0) return;

  flipBoxes.forEach((box: HTMLElement) => {
    box.addEventListener("click", () => {
      const inner = box.querySelector<HTMLElement>(".box-flip-inner");

      if (inner) {
        inner.classList.toggle("flipped");
      }
    });
  });
}
