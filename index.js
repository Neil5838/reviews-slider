const employees = [
  {
    img: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/WM2A4916-1352_thumb.jpg",
    name: "Mira Agarwal",
    post: "Software Engineer",
    reviews:
      "Mira has a strong background in full-stack development and specializes in building scalable web applications. She is known for her attention to detail and commitment to delivering high-quality code.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Rohan Verma",
    post: "Project Manager",
    reviews:
      "Rohan is an experienced project manager who ensures seamless coordination across teams. His leadership skills and ability to meet tight deadlines have been invaluable to the company.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Anjali Shah",
    post: "UI/UX Designer",
    reviews:
      "Anjali is a creative designer with expertise in crafting user-friendly interfaces. Her designs enhance user experience while aligning perfectly with client requirements.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Karan Singh",
    post: "Data Analyst",
    reviews:
      "Karan's data-driven insights help the company make informed decisions. His analytical skills and proficiency with visualization tools have been a key asset to the team.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Priya Nair",
    post: "HR Specialist",
    reviews:
      "Priya handles recruitment, employee engagement, and policy implementation with great professionalism. She plays a vital role in maintaining a positive work environment.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Arjun Mehta",
    post: "DevOps Engineer",
    reviews:
      "Arjun is a problem-solver who ensures smooth deployment pipelines and infrastructure management. His expertise in automation has significantly improved operational efficiency.",
  }
];

const profile = document.querySelector('.img');
const employee = document.querySelector('.employee');
const post = document.querySelector('.post');
const reviews = document.querySelector('.reviews');

const previousBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showEmployee();
});

function showEmployee() {
    const item = employees[currentItem];
    profile.src = item.img;
    employee.textContent = item.name;
    post.textContent = item.post;
    reviews.textContent = item.reviews;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > employees.length - 1) currentItem = 0;
    showEmployee();
});

previousBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        console.log(currentItem)
        currentItem = employees.length - 1;
    }
    showEmployee();
})


