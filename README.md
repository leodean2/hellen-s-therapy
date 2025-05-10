# Hellen Counseling Website  

## 🚀 Features  
- Responsive design  
- Contact form with validation  
- Testimonial slider  

## 🔧 Setup  
1. Clone the repo:  
   ```bash
   https://github.com/leodean2/hellen-s-therapy.git
   
---

### **2. Add Code Comments**  
Document key parts of your **HTML, CSS, and JavaScript** files:  
- **HTML:** Describe sections (e.g., `<header>`, `<form>`).  
- **CSS:** Note layout logic (e.g., `/* Mobile-first media query */`).  
- **JavaScript:** Explain functions (e.g., `// Handles form validation`).  

**Example:**  
```javascript
// Testimonial slider: Cycles through client reviews  
function showTestimonial(index) {  
  testimonials.forEach((testimonial) => {  
    testimonial.classList.remove("active");  
  });  
  testimonials[index].classList.add("active");  
}  
