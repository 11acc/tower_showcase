

// explore IE Tower’s facilities

// Use of Objects
// Use of template strings

class Item {
    constructor(name, category, image, description) {
        this.name = name;
        this.category = category;
        this.image = image;
        this.description = description;
    }
}

const itemData = [
    new Item("Classrooms of the FUTURE", "Tower Facilities", "./img/item/class.png", "The Tower has 64 versatile classrooms, including four with a 360º design, all featuring natural light, intelligent climate and lighting control, and state-of-the-art technology tailored to our students' educational needs.")
    , new Item("Student Hubs", "Tower Facilities", "./img/item/hubs.png", "The perfect place to grab a coffee, have meetings or study in groups. The student hubs are also where students and faculty come together to exchange ideas in the heart of the IE University community.")
    , new Item("Media Lab", "Tower Facilities", "./img/item/medialab.png", "A space to practice using industry tools, learn about audiovisual production processes and work alongside other students either for class or to pursue another extracurricular interest.")
    , new Item("Fab Lab", "Tower Facilities", "./img/item/fab.png", "Where creatives and future professionals merge, the Fab Lab is a space to combine traditional methods like woodworking with modern and digital tools to help students projects take shape.")
    , new Item("Robotics Lab", "Tower Facilities", "./img/item/robotics.png", "Students will be guided by experts to develop their own ideas and projects using a host of tools, expanding their hands-on competencies in advanced technologies that include a RoboMaster Robot, three Dobot Magician robotic arms and IE University’s proprietary humanoid robot, TIAGo.")
    , new Item("Design Studio", "Tower Facilities", "./img/item/design.png", "An open-plan space to compare ideas with like-minded colleagues, turn ideas into realities and be creative. It's designed to adapt to various educational needs, whether it be individual study, group projects, or interactive workshops.")
    , new Item("Design Studio", "Tower Facilities", "./img/item/design.png", "Open spaces within the building in which to develop university life. They generate spaciousness and comfort, an open experience. Our students have one of the most impressive views of Madrid and can enjoy it outdoors since the tower has the highest terrace in Madrid.")
    , new Item("Design Studio", "Tower Facilities", "./img/item/design.png", "An open-plan space to compare ideas with like-minded colleagues, turn ideas into realities and be creative. It's designed to adapt to various educational needs, whether it be individual study, group projects, or interactive workshops.")
];

const overlay = document.querySelector(".overlay");
const items = document.querySelectorAll(".item");
const i_close = document.querySelector("#i_close");

function updateOverlay(info) {
    let overlayContent = `
        <div class="o_head">
            <div class="col">
                <h1 id="i_name">${info.name}</h1>
                <p id="i_cat">${info.category}</p>
            </div>
        </div>
        <div class="details">
            <p id="i_desc">${info.description}</p>
        </div>
        <div class="img_showcase">
            <img id="i_img" src="${info.image}" alt="${info.name}" />
        </div>
    `;

    overlay.innerHTML = overlayContent;
}
function isItem(target) {
    return target.closest(".item");
}
function overlayAction(action) {
    if (action) {
        // want to open
        if (overlay.classList.contains('hide')) {
            overlay.classList.remove('hide');
            overlay.classList.add('show');
        } else if (!overlay.classList.contains('show')) {
            overlay.classList.add('show');
        }
    } else {
        // want to close
        if (overlay.classList.contains('show')) {
            overlay.classList.remove('show');
            overlay.classList.add('hide');
        }
    }
}

// update items
items.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateOverlay(itemData[index]);
        overlayAction(true);
    });
});

// i_close.addEventListener("click", () => {
//     // close overlay
//     overlayAction(false);
// });

// close if click outside of overlay
document.addEventListener("click", (click) => {
    if (!overlay.contains(click.target) && !isItem(click.target)) {
        overlayAction(false);
    }
});