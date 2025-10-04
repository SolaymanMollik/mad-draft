let teachersData = [
  {
    name: 'Abdur Rahman al hadi',
    lebel: 'Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-1.jpg',
  },
  {
    name: 'Jubair al hadi',
    lebel: 'vice Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-3.jpg',
  },
  {
    name: 'Jubair al hadi',
    lebel: 'vice Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-4.jpg',
  },
  {
    name: 'Abdur Rahman al hadi',
    lebel: 'Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-1.jpg',
  },
  {
    name: 'Jubair al hadi',
    lebel: 'vice Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-3.jpg',
  },
  {
    name: 'Jubair al hadi',
    lebel: 'vice Principal',
    gender: 'male',
    number: '+880 1580 3578 **',
    des: 'lorem ispum ',
    img: 'assets/img/team/team-4.jpg',
  },
];

const setData = () => {
  let teachersDataDivs = document.getElementById('teachersData');

  /**
   * set all value
   */

  teachersData.forEach((x) => {
    // create new div
    const newDiv = document.createElement('div');

    // add class
    newDiv.className = 'col-lg-4 col-md-6 member';

    // add data attribute
    newDiv.setAttribute('data-aos', 'fade-up');
    newDiv.setAttribute('data-aos-delay', '100');

    newDiv.innerHTML = `
  <div class="member-img" data-aos="fade-left"
              data-aos-delay="100">
                <img
                  src="${x.img}"
                  class="img-fluid"
                  alt=""
                />
                <div class="social" >
                  <a href="#"><i class="bi bi-twitter-x"></i></a>
                  <a href="#"><i class="bi bi-facebook"></i></a>
                  <a href="#"><i class="bi bi-instagram"></i></a>
                  <a href="#"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>${x.name}</h4>
                <span>${x.lebel}</span>
                <p>Mobile : ${x.number}</p>
                <p>
                ${x.des}
                </p>
              </div>

`;

    teachersDataDivs.appendChild(newDiv);
  });
};
setData();
