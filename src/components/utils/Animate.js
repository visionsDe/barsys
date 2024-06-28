import * as Motion from "motion";

export const AnimateWhenInView = (element, cb) => {
  Motion.inView(element, () => {
    cb();
  });
};

export const UnloadItems = (childNodes, cb = false) => {
  let animate = Motion.animate(
    childNodes,
    { y: [0, 50], opacity: [1, 0], visibility: ["visible", "hidden"] },
    {
      duration: 0.5,
      delay: Motion.stagger(0.1),
    }
  );
  cb && animate.finished.then(cb);
};

export const LoadItemsAnimation = (childNodes, cb = false) => {
  let animate = Motion.animate(
    childNodes,
    { y: [50, 0], opacity: [0, 1], visibility: ["hidden", "visible"] },
    {
      duration: 0.7,
      delay: Motion.stagger(0.1),
    }
  );
  cb && animate.finished.then(cb);
};

export const PanelTransition = async (fromPanel, toPanel) => {
  await Motion.animate(
    fromPanel,
    { transform: ["translateY(0)", "translateY(2rem)"], opacity: [1, 0] },
    { duration: 0.15 }
  ).finished;
  fromPanel.hidden = true;
  toPanel.hidden = false;
  Motion.animate(
    toPanel,
    { transform: ["translateY(2rem)", "translateY(0)"], opacity: [0, 1] },
    { duration: 0.15 }
  ).finished;
  LoadItemsAnimation(toPanel.firstElementChild.firstElementChild.childNodes);
};
