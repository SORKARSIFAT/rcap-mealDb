const loadData = ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then(res => res.json())
    .then(data => displayData(data.meals))
}



const displayData = meals => {
    // console.log(meals); 
    const container = document.getElementById("meals-container");
   meals.forEach(meal => { 
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML=`
    <div class="card shadow">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="food img">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
             
              <p class="card-text"></p>
             
             <a href="${meal.strYoutube}" target="_blank" class="btn btn-success ">YouTube Link</a>
            </div>
          </div>
    `;
    container.appendChild(mealDiv);

    
   });

}

loadData();