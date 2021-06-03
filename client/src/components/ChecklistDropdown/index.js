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
                    <label for="balanced">
                        <input type="checkbox" id="balanced" />Balanced</label>
                    <label for="high-fiber" >
                        <input type="checkbox" id="high-fiber" />High-Fiber</label>
                    <label for="high-protein">
                        <input type="checkbox" id="high-protein" />High-Protein</label>
                    <label for="low-carb" >
                        <input type="checkbox" id="low-carb" />Low-Carb</label>
                    <label for="low-fat" >
                        <input type="checkbox" id="low-fat"/>Low-Fat</label>
                    <label for="low-sodium" >
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
                            <input type="checkbox" id="alcohol-free" />Alcohol-Free</label>
                        <label for="celery-free">
                            <input type="checkbox" id="celery-free" />Celery-Free</label>
                        <label for="crustacean-free">
                            <input type="checkbox" id="crustacean-free" />Crustacean-Free</label>
                        <label for="dairy-free">
                            <input type="checkbox" id="dairy-free" />Dairy-Free</label>
                        <label for="egg-free">
                            <input type="checkbox" id="egg-free" />Egg-Free</label>
                        <label for="fish-free">
                            <input type="checkbox" id="fish-free" />Fish-Free</label>
                        <label for="gluten-free">
                            <input type="checkbox" id="gluten-free" />Gluten-Free</label>
                        <label for="keto">
                            <input type="checkbox" id="keto" />Keto</label>
                        <label for="kidney-friendly">
                            <input type="checkbox" id="kidney-friendly" />Kidney-Friendly</label>
                        <label for="kosher">
                            <input type="checkbox" id="kosher"/>Kosher</label>
                        <label for="low-potassium">
                            <input type="checkbox" id="low-potassium" />Low-Potassium</label>
                        <label for="lupine-free">
                            <input type="checkbox" id="lupine-free" />Lupine-Free</label>
                        <label for="mustard-free">
                            <input type="checkbox" id="mustard-free" />Mustard-Free</label>
                        <label for="no-oil-added">
                            <input type="checkbox" id="no-oil-added" />No Oil Added</label>
                        <label for="no-sugar">
                            <input type="checkbox" id="no-sugar" />No-Sugar</label>
                        <label for="paleo">
                            <input type="checkbox" id="paleo" />Paleo</label>
                        <label for="peanut-free">
                            <input type="checkbox" id="peanut-free" />Peanut-Free</label>
                        <label for="pescatarian">
                            <input type="checkbox" id="pescatarian" />Pescatarian</label>
                        <label for="pork-free">
                            <input type="checkbox" id="pork-free" />Pork-Free</label>
                        <label for="red-meat-free">
                            <input type="checkbox" id="red-meat-free"/>Red Meat-Free</label>
                        <label for="sesame-free">
                            <input type="checkbox" id="sesame-free" />Sesame-Free</label>
                        <label for="shellfish-free">
                            <input type="checkbox" id="shellfish-free" />Shellfish-Free</label>
                        <label for="soy-free">
                            <input type="checkbox" id="soy-free"/>Soy-Free</label>
                        <label for="sugar-conscious">
                            <input type="checkbox" id="sugar-conscious"/>Sugar-Conscious</label>
                        <label for="treenut-free">
                            <input type="checkbox" id="treenut-free" />Tree-Nut-Free</label>
                        <label for="vegan">
                            <input type="checkbox" id="vegan" />Vegan</label>
                        <label for="vegetarian">
                            <input type="checkbox" id="vegetarian" />Vegetarian</label>
                        <label for="wheat-free">
                            <input type="checkbox" id="wheat-free" />Wheat-Free</label>
                    </div>
                </div>
            </span>
        </div>



    )

}

export default ChecklistDropdown;