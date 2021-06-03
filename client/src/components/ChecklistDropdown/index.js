import React from "react";
import './style.css';


const ChecklistDropdown = () => {


    var expanded = false;

    const checkStatus = () => {
        console.log("yay click me!!");

    }


    const showCheckboxes = () => {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    const showCheckboxes2 = () => {
        var checkboxes2 = document.getElementById("checkboxes2");
        if (!expanded) {
            checkboxes2.style.display = "block";
            expanded = true;
        } else {
            checkboxes2.style.display = "none";
            expanded = false;
        }
    }


    return (
        <div>
            <span className="multiselect">
                <div className="selectBox">
                    <select >
                        <option >Diet Selection</option>
                    </select>
                    <div className="overSelect" onClick={() => {
                    showCheckboxes();
                    checkStatus();
                    }}></div>
                </div>
                <div id="checkboxes">
                    <label for="balanced"className="text-light">
                        <input type="checkbox" id="balanced" />Balanced</label>
                    <label for="high-fiber" className="text-light">
                        <input type="checkbox" id="high-fiber" />High-Fiber</label>
                    <label for="high-protein" className="text-light">
                        <input type="checkbox" id="high-protein" />High-Protein</label>
                    <label for="low-carb" className="text-light">
                        <input type="checkbox" id="low-carb" />Low-Carb</label>
                    <label for="low-fat" className="text-light">
                        <input type="checkbox" id="low-fat"/>Low-Fat</label>
                    <label for="low-sodium" className="text-light">
                        <input type="checkbox" id="low-sodium"/>Low-Sodium</label>
                </div>
            </span>
                    

            <span className="multiselect">
                <div className="selectBox">
                    <select>
                        <option>Health Restrictions</option>
                    </select>
                    <div className="overSelect" onClick={() => {
                    showCheckboxes();
                    checkStatus();
                    
                    }}></div>

                    <div id="checkboxes2">
                        <label for="alcohol-free">
                            <input type="checkbox" id="alcohol-free" className="text-light"/>Alcohol-Free</label>
                        <label for="celery-free">
                            <input type="checkbox" id="celery-free" className="text-light"/>Celery-Free</label>
                        <label for="crustacean-free">
                            <input type="checkbox" id="crustacean-free" className="text-light"/>Crustacean-Free</label>
                        <label for="dairy-free">
                            <input type="checkbox" id="dairy-free" className="text-light"/>Dairy-Free</label>
                        <label for="egg-free">
                            <input type="checkbox" id="egg-free" className="text-light"/>Egg-Free</label>
                        <label for="fish-free">
                            <input type="checkbox" id="fish-free" className="text-light"/>Fish-Free</label>
                        <label for="gluten-free">
                            <input type="checkbox" id="gluten-free" className="text-light"/>Gluten-Free</label>
                        <label for="keto">
                            <input type="checkbox" id="keto" className="text-light"/>Keto</label>
                        <label for="kidney-friendly">
                            <input type="checkbox" id="kidney-friendly" className="text-light"/>Kidney-Friendly</label>
                        <label for="kosher">
                            <input type="checkbox" id="kosher" className="text-light"/>Kosher</label>
                        <label for="low-potassium">
                            <input type="checkbox" id="low-potassium" className="text-light"/>Low-Potassium</label>
                        <label for="lupine-free">
                            <input type="checkbox" id="lupine-free" className="text-light" />Lupine-Free</label>
                        <label for="mustard-free">
                            <input type="checkbox" id="mustard-free" className="text-light"/>Mustard-Free</label>
                        <label for="no-oil-added">
                            <input type="checkbox" id="no-oil-added" className="text-light"/>No Oil Added</label>
                        <label for="no-sugar">
                            <input type="checkbox" id="no-sugar" className="text-light"/>No-Sugar</label>
                        <label for="paleo">
                            <input type="checkbox" id="paleo" className="text-light"/>Paleo</label>
                        <label for="peanut-free">
                            <input type="checkbox" id="peanut-free" className="text-light"/>Peanut-Free</label>
                        <label for="pescatarian">
                            <input type="checkbox" id="pescatarian" className="text-light"/>Pescatarian</label>
                        <label for="pork-free">
                            <input type="checkbox" id="pork-free" className="text-light"/>Pork-Free</label>
                        <label for="red-meat-free">
                            <input type="checkbox" id="red-meat-free" className="text-light"/>Red Meat-Free</label>
                        <label for="sesame-free">
                            <input type="checkbox" id="sesame-free" className="text-light"/>Sesame-Free</label>
                        <label for="shellfish-free">
                            <input type="checkbox" id="shellfish-free" className="text-light"/>Shellfish-Free</label>
                        <label for="soy-free">
                            <input type="checkbox" id="soy-free" className="text-light"/>Soy-Free</label>
                        <label for="sugar-conscious">
                            <input type="checkbox" id="sugar-conscious" className="text-light"/>Sugar-Conscious</label>
                        <label for="treenut-free">
                            <input type="checkbox" id="treenut-free" className="text-light"/>Tree-Nut-Free</label>
                        <label for="vegan">
                            <input type="checkbox" id="vegan" className="text-light" />Vegan</label>
                        <label for="vegetarian">
                            <input type="checkbox" id="vegetarian" className="text-light"/>Vegetarian</label>
                        <label for="wheat-free">
                            <input type="checkbox" id="wheat-free" className="text-light"/>Wheat-Free</label>
                    </div>
                </div>
            </span>
        </div>



    )

}

export default ChecklistDropdown;