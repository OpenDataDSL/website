import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// ODSL custom js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export function configureAnimations() {
	gsap.from('.scroll-to-display', {
	  duration: 1,
	  opacity: 0,
	  y: 50,
	  stagger: 0.25,
	  scrollTrigger: {
		trigger: '.scroll-to-display',
		toggleActions: 'restart none none none',
	  },
	})

	for (let i = 1; i <= 7; i=i+2) {
		if (document.querySelectorAll('.scroll-to-display-' + i).length > 0) {
			gsap.from('.scroll-to-display-' + i, {duration: 1, x: 200, scrollTrigger: {trigger: '.scroll-to-display-' + i}});
		}
	}
	for (let i = 2; i <= 7; i=i+2) {
		if (document.querySelectorAll('.scroll-to-display-' + i).length > 0) {
			gsap.from('.scroll-to-display-' + i, {duration: 1, x: -200, scrollTrigger: {trigger: '.scroll-to-display-' + i}});
		}
	}


}

