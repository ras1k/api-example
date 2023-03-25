const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals)
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetails2(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                Details
                </button>
            </div>
        </div>`;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

// const loadMealDetails = idMeal => {
//     console.log(idMeal)
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealdetails(data.meals[0]))
//     .catch(error => console.log(error))
// }

// async await
const loadMealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealdetails(data.meals[0]);
    }
    catch(error) {
        console.log(error)
    }
}

const displayMealdetails = meal => {
    console.log(meal.strMeal);
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('meal-details-body');
    mealsDetails.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top w-100" alt="...">
    <h4 class="mt-2">Category : ${meal.strCategory}</h4>
    <h4 class="mt-2">Area : ${meal.strArea}</h4>
    <p>Instructions : ${meal.strInstructions}</p>
    <a href="${meal.strYoutube}">Links</a>

    `;
}
loadMeals('burger')