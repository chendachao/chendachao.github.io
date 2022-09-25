

import './flashlight.css';

export function initFlashlight () {
  const flashlightSelection = document.querySelector('#flashlight_selection');
  
  flashlightSelection.addEventListener('change', (e) => {
    const mode = e.target.value;
    const light = document.getElementById('flashlight');
    light.className = mode;
    flashlightSelection.blur();
  });
}

export function removeFlashlight () {
  const flashlightSelection = document.querySelector('#flashlight_selection');
  flashlightSelection.value = '';
  flashlightSelection.dispatchEvent(new Event('change'));
}

export function moveFlashlight(event) {
  const light = document.getElementById('flashlight');
  if (light.className) {
    light.style.left = `${event.clientX - 125}px`;
    light.style.top = `${event.clientY - 125}px`;
  }
}
