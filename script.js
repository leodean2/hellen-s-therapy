/**
 * Handles the testimonial slider animation
 * @param {number} index - Index of the testimonial to display
 * @example
 * showTestimonial(0); // Shows first testimonial
 */
function showTestimonial(index) {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove("active");
  });
  testimonials[index].classList.add("active");
}