const employees = [
    {
      img: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/WM2A4916-1352_thumb.jpg",
      name: "Mira Agarwal",
      post: "Software Engineer",
      reviews:
        "Working here has been a rewarding experience. The company fosters a culture of innovation and provides ample opportunities for professional growth. I appreciate the collaborative environment and supportive management.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Rohan Verma",
      post: "Project Manager",
      reviews:
        "This company truly values its employees. The leadership team is approachable, and the work-life balance is fantastic. I’ve had the chance to lead challenging projects and grow as a professional.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      name: "Anjali Shah",
      post: "UI/UX Designer",
      reviews:
        "I love how the company encourages creativity and innovation. The team is highly talented, and everyone is committed to delivering the best results. It’s been a pleasure working here.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/29.jpg",
      name: "Karan Singh",
      post: "Data Analyst",
      reviews:
        "The organization provides excellent resources and support to excel in our roles. I value the focus on professional development and the inclusive work culture that encourages collaboration.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/40.jpg",
      name: "Priya Nair",
      post: "HR Specialist",
      reviews:
        "This is a company that truly cares about its employees. The positive work culture and emphasis on employee engagement make it a great place to work. It’s fulfilling to be part of such an amazing team.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      name: "Arjun Mehta",
      post: "DevOps Engineer",
      reviews:
        "The company’s commitment to staying ahead with technology is inspiring. I enjoy working in an environment that challenges me to improve and values my contributions to the team.",
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


