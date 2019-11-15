import React, { useContext, useState, createContext } from "react";
import findMatchingLocations from "../../../utils/findMatchingLocations";
import styles from "./LocationForm.module.css";
import citiesList from "../../../data/citiesList";
const SearchbarContext = createContext();

//TODO detect click outside suggestions
const LocationFormTitle = () => {
    return <h2 className={styles["form-title"]}>Find jobs in your area</h2>;
};
const SubmitButton = () => {
    return (
        <button
            type="submit"
            className={styles["form-submit"]}
            // TODO add disabled quality if null/errors
        >
            Search Jobs
        </button>
    );
};

const SearchbarLabel = () => {
    return (
        <label htmlFor="searchbar" className={styles["searchbar-label"]}>
            Enter a city:
        </label>
    );
};
const LocationSearchbar = () => {
    const {
        searchbarText,
        setSearchbarText,
        displaySuggestions,
        setDisplaySuggestions,
        activeSuggestion,
        setActiveSuggestion,
        filteredSuggestions,
        setFilteredSuggestions
    } = useContext(SearchbarContext);

    const handleSearchbarChange = (
        event,
        setSearchbarText,
        setDisplaySuggestions,
        setFilteredSuggestions
    ) => {
        const eventText = event.target.value;
        setSearchbarText(eventText);

        if (eventText.length > 1) {
            setDisplaySuggestions(true);
            setFilteredSuggestions(
                findMatchingLocations(eventText, citiesList)
            );
        } else {
            setDisplaySuggestions(false);
        }
    };

    const handleSearchbarKeyDown = (
        event,
        displaySuggestions,
        setDisplaySuggestions,
        activeSuggestion,
        setActiveSuggestion,
        setSearchbarText
    ) => {
        if (displaySuggestions) {
            // Enter key
            if (event.keyCode === 13) {
                const currentSuggestion = filteredSuggestions[activeSuggestion];
                setActiveSuggestion(0);
                setDisplaySuggestions(false);
                // If suggestions, enter should change searchbar text
                // If no suggestions, enter should submit form
                if (currentSuggestion) {
                    event.preventDefault();
                    setSearchbarText(currentSuggestion);
                }
            }
            // Up key
            else if (event.keyCode === 38) {
                // Can't go up beyond the first list item
                if (activeSuggestion === 0) {
                    return;
                }
                setActiveSuggestion(activeSuggestion - 1);
            }
            // Down key
            else if (event.keyCode === 40) {
                // Can't go down beyond the final list item
                if (activeSuggestion === filteredSuggestions.length - 1) {
                    return;
                }
                setActiveSuggestion(activeSuggestion + 1);
            }
        }
    };

    return (
        <input
            type="text"
            name="searchbar"
            id="searchbar"
            value={searchbarText}
            autoComplete="off"
            onChange={event =>
                handleSearchbarChange(
                    event,
                    setSearchbarText,
                    setDisplaySuggestions,
                    setFilteredSuggestions
                )
            }
            onKeyDown={event =>
                handleSearchbarKeyDown(
                    event,
                    displaySuggestions,
                    setDisplaySuggestions,
                    activeSuggestion,
                    setActiveSuggestion,
                    setSearchbarText
                )
            }
            className={styles["form-text-input"]}
        />
    );
};

const SuggestionsList = () => {
    const {
        filteredSuggestions,
        setFilteredSuggestions,
        setSearchbarText,
        activeSuggestion,
        setActiveSuggestion,
        setDisplaySuggestions
    } = useContext(SearchbarContext);

    const handleSuggestionClick = event => {
        setSearchbarText(event.target.innerText);
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    };

    return filteredSuggestions.length ? (
        <ul
            className={styles["form-suggestions"]}
            data-testid="suggestions-list"
        >
            {filteredSuggestions.map((suggestion, index) => {
                let className = "suggestions-li";
                if (index === activeSuggestion) {
                    className = "active-suggestion";
                }

                return (
                    <li
                        className={styles[className]}
                        key={suggestion}
                        onClick={handleSuggestionClick}
                    >
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    ) : (
        <p className={styles["warning-message"]}>
            We can't find a match!
            <br /> You're on your own here.
        </p>
    );
};

const LocationForm = ({ setLocation }) => {
    const [searchbarText, setSearchbarText] = useState("");
    const [displaySuggestions, setDisplaySuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    //TODO think about errors

    const handleLocationSubmit = (event, searchbarText, setLocation) => {
        event.preventDefault();
        console.log("SETTING LOCATION", searchbarText);
        setLocation(searchbarText);
    };

    return (
        <SearchbarContext.Provider
            value={{
                searchbarText,
                setSearchbarText,
                displaySuggestions,
                setDisplaySuggestions,
                filteredSuggestions,
                setFilteredSuggestions,
                activeSuggestion,
                setActiveSuggestion
            }}
        >
            <form
                onSubmit={event =>
                    handleLocationSubmit(event, searchbarText, setLocation)
                }
                className={styles["form"]}
            >
                <LocationFormTitle />
                <div className={styles["searchbar-container"]}>
                    <SearchbarLabel />
                    <div className={styles["input-suggestions-container"]}>
                        <LocationSearchbar />
                        {displaySuggestions ? <SuggestionsList /> : null}
                    </div>
                    <SubmitButton />
                </div>
            </form>
        </SearchbarContext.Provider>
    );
};

export default LocationForm;
