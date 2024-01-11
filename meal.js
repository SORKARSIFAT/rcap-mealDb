const loadData = (searchText)=>{
    const URL= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}



const displayData = meals => {
    // console.log(meals); 
    const container = document.getElementById("meals-container");
    container.innerText= "";
   meals.forEach(meal => { 
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML=`
    <div class="card shadow">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="food img">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
             
              
             
             <a href="${meal.strYoutube}" target="_blank" class="btn btn-success ">YouTube Link</a>
           
     <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary"   data-bs-toggle="modal" data-bs-target="#mealDetails">Details
    </button>  
    </div>
    </div>
    `;
    container.appendChild(mealDiv);
   });
}

const searchMeals =()=>{
    console.log("btn");
    const searchText2 = document.getElementById("search-field").value;
    loadData(searchText2)
    console.log(searchText2);
  

}


const loadMealDetails = idMeal =>{
  
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal =>{
    document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML =`
    <p class="text-success"><span class="fs-5 text">Meal Area:</span> ${meal.strArea}</p>
    <p class="text-success"><span class="fs-5 text">Meal Category :</span> ${meal.strCategory}</p>
    <p class="text-primary"><span class="fs-5 text">Meal Instructions:</span> ${meal.strInstructions}</p>
    

    `





}




loadData("rice");