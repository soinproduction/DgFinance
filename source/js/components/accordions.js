
const indexServices = document.querySelector('.index-services__box');
const breakpointPhone = 576;

const enableMobileAccordion = (ellement, enableClass) => {
  let containerWidth = document.documentElement.clientWidth;
  containerWidth <= breakpointPhone ?
  ellement.classList.add(enableClass) :
  ellement.classList.remove(enableClass);
}

if (indexServices) {
  window.addEventListener('resize', () => {
    enableMobileAccordion(indexServices,'accordion');
  });

  window.addEventListener('DOMContentLoaded', () => {
    enableMobileAccordion(indexServices,'accordion');
  });
}


window.addEventListener('DOMContentLoaded', () => {
  const accordionParrent = document.querySelector('.accordion');


    const getAccordions = function(dataName = "[data-id]") {
      return accordionParrent?.querySelectorAll(dataName);
    }

    const accordions = getAccordions();


    const closeAccordion = function (accordion) {
      accordion.style.maxHeight = 0;
    };

    const openAccordion = function (accordion) {
      accordion.style.maxHeight = accordion.scrollHeight + "px";
    };

    const toggleAccordionButton = function (button, className = "active") {
      button.classList.toggle(className);
    };

    const checkIsAccordionOpen = function(accordion) {
      return accordion.style.maxHeight && accordion.style.maxHeight !== "0px";
    }

    const accordionClickHandler = function () {

    let curentDataNumber = this.dataset.id

    toggleAccordionButton(this);

    const accordionContent = accordionParrent.querySelector(`[data-content="${curentDataNumber}"]`);
    const isAccordionOpen = checkIsAccordionOpen(accordionContent);

    if (isAccordionOpen) {
      closeAccordion(accordionContent);
      // openedAccordion = null;
    } else {
      // if (openedAccordion != null) {

      //   console.log(openedAccordion )

      //   closeAccordion(openedAccordion);
      //   const accordionButton = document.querySelector(`[data-id="${openedAccordion.dataset.content}"]`)
      //   toggleAccordionButton(accordionButton);
      // }
      openAccordion(accordionContent);
      // openedAccordion = accordionContent;
    }
  }

    const activateAccordion = function(accordions, handler) {
      for (const accordion of accordions) {
        accordion.addEventListener('click', handler)
      }
    }

    if (accordionParrent) {
      activateAccordion(accordions,accordionClickHandler);
    }
});

