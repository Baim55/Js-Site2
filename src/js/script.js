function menuOpen() {
  let menubar = document.getElementById("menubar");

  if (menubar.style.right == "-100%") {
    menubar.style.right = "0";
  } else {
    menubar.style.right = "-100%";
  }
}

const properties = document.getElementById("properties");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function slideNext() {
  properties.scrollLeft += 300;

  if (
    properties.scrollLeft + properties.clientWidth >=
    properties.scrollWidth - 5
  ) {
    properties.scrollLeft = 0;
  }
}

next.onclick = slideNext;

prev.onclick = () => {
  properties.scrollLeft -= 300;
};

setInterval(slideNext, 3000);

let test = document.getElementById("test");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

function slideNext2() {
  test.scrollLeft += 300;

  if (test.scrollLeft + test.clientWidth >= test.scrollWidth - 5) {
    test.scrollLeft = 0;
  }
}

next2.onclick = slideNext2;

prev2.onclick = () => {
  test.scrollLeft -= 300;
};

setInterval(slideNext2, 3000);

let img = [
  "https://themewagon.github.io/property/images/img_1.jpg",
  "https://themewagon.github.io/property/images/img_2.jpg",
  "https://themewagon.github.io/property/images/img_3.jpg",
  "https://themewagon.github.io/property/images/img_4.jpg",
  "https://themewagon.github.io/property/images/img_5.jpg",
  "https://themewagon.github.io/property/images/img_6.jpg",
  "https://themewagon.github.io/property/images/img_7.jpg",
  "https://themewagon.github.io/property/images/img_8.jpg",
];

let price = [
  "1,291,000",
  "1,291,000",
  "1,291,000",
  "1,291,000",
  "1,291,000",
  "1,291,000",
  "1,291,000",
  "1,291,000",
];

properties.innerHTML = img
  .map(
    (img, i) => `<div class="snap-start">
              <div class="shadow-[0_15px_30px_rgba(0,0,0,0.05)] bg-white">
                <img
                  src="${img}"
                  class="w-full h-[330px] object-cover object-top"
                />
                <div class="p-[30px]">
                  <span
                    class="price inline-flex text-[20px] text-[#005555] font-bold border-b-2 border-[#005555] mb-[8px]"
                    >$${price[i]}</span
                  >
                  <p class="text-[13px] text-[#7f7f7f] mb-[8px]">
                    5232 California Fake, Ave. 21BC
                  </p>
                  <h3 class="mb-[16px] text-[20px] font-bold">
                    California, USA
                  </h3>
                  <div class="flex gap-2 text-[#7f7f7f] mb-[24px]">
                    <div>
                      <i class="fa-solid fa-bed"></i>
                      <span class="text-[13px]">2 beds</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-bath"></i>
                      <span class="text-[13px]">2 baths</span>
                    </div>
                  </div>
                  <a
                    class="inline-block transition duration-300 hover:-translate-y-1 bg-[#005555] text-white py-[8px] px-[16px] rounded-full"
                    >See details</a
                  >
                </div>
              </div>
            </div>`,
  )
  .join("");

let img2 = [
  "src/img/new.png",
  "src/img/building.png",
  "src/img/real-estate-agent.png",
  "src/img/snow.png",
];
let title = [
  "Our Properties",
  "Property for Sale",
  "Real Estate Agent",
  "House for Sale",
];
let desc = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
];

features.innerHTML = title
  .map(
    (title, i) => `<div data-aos="fade-up"
     data-aos-duration="1000" class="bg-white p-[30px] text-center">
            <div class="flex items-center justify-center">
              <img src="${img2[i]}" alt="" class="w-[60px] mb-[10px]" />
            </div>
            <h3 class="text-[#00204a] mb-[16px] font-medium">${title}</h3>
            <p class="mb-[16px] text-[#7f7f7f]">
              ${desc[i]}
            </p>
            <a href="" class="border-b-2 border-[#005555] pb-[4px]"
              >Learn More</a
            >
          </div>`,
  )
  .join("");

let img3 = [
  "https://themewagon.github.io/property/images/person_1-min.jpg",
  "https://themewagon.github.io/property/images/person_2-min.jpg",
  "https://themewagon.github.io/property/images/person_3-min.jpg",
  "https://themewagon.github.io/property/images/person_4-min.jpg",
];

let name = ["James Smith", "Mike Houston", "Cameron Webster", "Dave Smith"];
let desc3 = [
  "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
  "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
  "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
  "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
];

let jobs = [
  "Designer, Co-founder",
  "Designer, Co-founder",
  "Designer, Co-founder",
  "Designer, Co-founder",
];

test.innerHTML = jobs
  .map(
    (job, i) => `
      <div class="snap-start px-4 md:px-0">
        <div class="w-full max-w-[360px] mx-auto ">
          <img src="${img3[i]}" alt=""
               class="mb-[24px] w-[80px] h-[80px] rounded-full object-cover" />

          <div class="mb-3">
            <i class="fa-solid fa-star text-[#ffc107]"></i>
            <i class="fa-solid fa-star text-[#ffc107]"></i>
            <i class="fa-solid fa-star text-[#ffc107]"></i>
            <i class="fa-solid fa-star text-[#ffc107]"></i>
            <i class="fa-solid fa-star text-[#ffc107]"></i>
          </div>

          <h3 class="text-[20px] font-medium mb-[16px] text-[#00204a]">${name[i]}</h3>

          <p class="mb-[16px] text-[14px] text-[#7f7f7f] leading-6">${desc3[i]}</p>

          <span class="text-[#7f7f7f] text-[14px]">${job}</span>
        </div>
      </div>
    `,
  )
  .join("");

let agents = document.getElementById("agents");
let agentImg = [
  "https://themewagon.github.io/property/images/person_1-min.jpg",
  "https://themewagon.github.io/property/images/person_2-min.jpg",
  "https://themewagon.github.io/property/images/person_3-min.jpg",
];
let agentName = ["James Smith", "Mike Houston", "Cameron Webster"];
let agentRole = ["Real Estate Agent", "Real Estate Agent", "Real Estate Agent"];
let agentDesc = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
];

agents.innerHTML = agentImg
  .map(
    (agentImg, i) => ` <div class="bg-white text-center relative mb-[26px]">
              <img
                src="${agentImg}"
                alt=""
                class="w-[90px] h-[90px] -top-[45px] left-1/2 -translate-x-1/2 rounded-full absolute"
              />
              <div class="p-[30px] pt-[58px]">
                <h3 class="text-[18px]">${agentName[i]}</h3>
                <p class="text-[14px] text-[#7c7c7d] mb-[16px]">${agentRole[i]}</p>
                <p class="text-[14px] text-[#7c7c7d] mb-[16px]">
                 ${agentDesc[i]}
                </p>
                <ul class="flex items-center justify-center gap-3">
                  <li class="">
                    <a
                      href=""
                      class="bg-[#00204a] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white transition duration-300 hover:-translate-y-1"
                      ><i class="fa-brands fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="bg-[#00204a] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white transition duration-300 hover:-translate-y-1"
                      ><i class="fa-brands fa-facebook"></i
                    ></a>
                  </li>
                  <li class="">
                    <a
                      href=""
                      class="bg-[#00204a] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white transition duration-300 hover:-translate-y-1"
                      ><i class="fa-brands fa-linkedin"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="bg-[#00204a] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white transition duration-300 hover:-translate-y-1"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>`,
  )
  .join("");
