let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalJob = document.getElementById("total");
let total1Job = document.getElementById("total1");
let totalInterview = document.getElementById("interview");
let totalRejected = document.getElementById("rejected");

const mainContainer = document.querySelector("main");

const allFilterButton = document.getElementById("all-filter-button");
const interviewFilterButton = document.getElementById(
  "interview-filter-button",
);
const rejectFilterButton = document.getElementById("reject-filter-button");

const allJobCardSeclection = document.getElementById("job-cards");
const filterSection = document.getElementById("filtered-section");
// console.log(allJobCardSeclection.children.length);

// console.log(mainContainer);

function calculateCount() {
  totalJob.innerText = allJobCardSeclection.children.length;
  totalInterview.innerText = interviewList.length;
  totalRejected.innerText = rejectedList.length;
  total1Job.innerText = allJobCardSeclection.children.length;

  if (allJobCardSeclection.children.length == 0) {
    allJobCardSeclection.classList.add("hidden");
    emptyJob.classList.remove("hidden");
  }
}
calculateCount();

function toggole(id) {
  // console.log("clicked", id);
  allFilterButton.classList.remove("bg-[#3B82F6]", "text-amber-50");
  interviewFilterButton.classList.remove("bg-[#3B82F6]", "text-amber-50");
  rejectFilterButton.classList.remove("bg-[#3B82F6]", "text-amber-50");

  allFilterButton.classList.add("text-[#64748B]");
  interviewFilterButton.classList.add("text-[#64748B]");
  rejectFilterButton.classList.add("text-[#64748B]");

  const selected = document.getElementById(id);
  currentStatus = id;
  // console.log(id);
  selected.classList.remove("text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-amber-50");

  if (id == "interview-filter-button") {
    allJobCardSeclection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterviewList();
  } else if (id == "reject-filter-button") {
    allJobCardSeclection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejectedList();
  } else if (id == "all-filter-button") {
    if (allJobCardSeclection.children.length == 0) {
      allJobCardSeclection.classList.add("hidden");
      emptyJob.classList.remove("hidden");
    }
    allJobCardSeclection.classList.remove("hidden");
    filterSection.classList.add("hidden");
    const emptyJob = document.querySelector(".No-jobs-available");
    emptyJob.classList.add("hidden");
  }
}

mainContainer.addEventListener("click", function (event) {
  // console.log(event.target.classList.contains("interview-button"));

  if (event.target.classList.contains("interview-button")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const jobCatagory = parentNode.querySelector(".job-catagory").innerText;
    const status = parentNode.querySelector(".job-status").innerText;
    const jobDescription = parentNode.querySelector(".job-description").innerText;
      
      parentNode
        .querySelector(".job-status")
        .classList.remove("hidden", "bg-red-100", "text-red-600");
      parentNode.querySelector(".job-status").classList.add("bg-green-100","text-green-600");
      parentNode.querySelector(".job-status").innerText = "INTERVIEW";
    const cardInfo = {
      jobTitle,
      jobRole,
      jobCatagory,
      status: "INTERVIEW",
      jobDescription,
    };
    // console.log(cardInfo);
    const jobExist = interviewList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobTitle != cardInfo.jobTitle,
    );

    if (currentStatus == "reject-filter-button") {
      renderRejectedList();
    }
    calculateCount();
    // renderInterviewList();
  } else if (event.target.classList.contains("reject-button")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const jobCatagory = parentNode.querySelector(".job-catagory").innerText;
    const status = parentNode.querySelector(".job-status").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    parentNode
      .querySelector(".job-status")
      .classList.remove("hidden", "bg-green-100", "text-green-600");
    parentNode
      .querySelector(".job-status")
      .classList.add("bg-red-100", "text-red-600");
    parentNode.querySelector(".job-status").innerText = "REJECTED";

    const cardInfo = {
      jobTitle,
      jobRole,
      jobCatagory,
      status: "REJECTED",
      jobDescription,
    };
    const jobExist = rejectedList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    // parentNode.querySelector(".job-status").innerText = "INTERVIEW";

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobTitle != cardInfo.jobTitle,
    );

    if (currentStatus == "interview-filter-button") {
      renderInterviewList();
    }
    calculateCount();
    // renderRejectedList();

    //   event.target.classList.contains("reject-button")
  } else if (event.target.classList.contains("delete")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector(".job-title").innerText;

    interviewList = interviewList.filter((item) => item.jobTitle != jobTitle);

    rejectedList = rejectedList.filter((item) => item.jobTitle != jobTitle);

    parentNode.remove();

    if (currentStatus == "interview-filter-button") {
      renderInterviewList();
    }
    if (currentStatus == "reject-filter-button") {
      renderRejectedList();
    }

    calculateCount();
  }
});

const emptyJob = document.querySelector(".No-jobs-available");
function emptySection() {
  filterSection.appendChild(emptyJob);
  emptyJob.classList.remove("hidden");
}
function hideEmptySection() {
  filterSection.appendChild(emptyJob);
  emptyJob.classList.add("hidden");
}

function renderInterviewList() {
  filterSection.innerHTML = ``;
  hideEmptySection();
  if (interviewList.length === 0) {
    emptySection();
    return;
  }
  for (let interview of interviewList) {
    // console.log(interview);

    let div = document.createElement("div");
    div.className = "card flex flex-row bg-[#ffffff] my-8 p-8 rounded-lg";
    div.innerHTML = ` <div class="   space-y-5 text-[#64748B] ">
                        <div>
                            <p class="job-title text-xl font-bold text-[#002C5C]">${interview.jobTitle}</p>
                            <p class="job-role">${interview.jobRole}</p>
                        </div>
                        <div>
                            <p class="job-catagory text-[14px]">${interview.jobCatagory}</p>
                        </div>
                        <p class="job-status p-3 text-green-500 font-semibold rounded-sm  md:w-4/20 bg-[#eef4ff] flex justify-center">${interview.status}</p>
                        <p class="job-description">${interview.jobDescription}</p>
                    
                        <div>
                            <button class=" interview-button btn text-[#10b981] border-[#10b981]  mr-2">INTERVIEW</button>
                            <button class="btn text-[#ef4444] border-[#ef4444] reject-button">REJECTED</button>
                        </div>
                    </div>
                    
               
    `;

    filterSection.appendChild(div);
  }
}
function renderRejectedList() {
  filterSection.innerHTML = ``;
  hideEmptySection();
  if (rejectedList.length === 0) {
    emptySection();
    return;
  }

  for (let rejected of rejectedList) {
    // console.log(interview);

    let div = document.createElement("div");
    div.className = "card flex flex-row bg-[#ffffff] my-8 p-8 rounded-lg";
    div.innerHTML = ` <div class="   space-y-5 text-[#64748B] ">
                        <div>
                            <p class="job-title text-xl font-bold text-[#002C5C]">${rejected.jobTitle}</p>
                            <p class="job-role">${rejected.jobRole}</p>
                        </div>
                        <div>
                            <p class="job-catagory text-[14px]">${rejected.jobCatagory}</p>
                        </div>
                        <p class="job-status p-3 text-red-500 font-semibold rounded-sm  md:w-4/20 bg-[#eef4ff] flex justify-center">${rejected.status}</p>
                        <p class="job-description">${rejected.jobDescription}</p>
                    
                        <div>
                            <button class=" interview-button btn text-[#10b981] border-[#10b981]  mr-2">INTERVIEW</button>
                            <button class="btn text-[#ef4444] border-[#ef4444] reject-button">REJECTED</button>
                        </div>
                    </div>
                   
               
    `;

    filterSection.appendChild(div);
  }
}
