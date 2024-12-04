import { useState, useEffect, useRef } from "react";
import style from "./WorkFlows.module.css";
import MainCon from "../../../skeletons/MainCon/MainCon";
import filter from "../../../assets/switch-vertical-02.svg";
import refresh from "../../../assets/refresh.svg";
import plus from "../../../assets/plus.svg";
import ItemContainer from "../../../skeletons/ItemContainer/ItemContainer";
import { workFlowList } from "../../../Data/WorkflowList";
import close from "../../../assets/x.svg";

function WorkFlows() {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [isSkipMenuOpen, setIsSkipMenuOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  // Refs to detect clicks outside the menus
  const addMenuRef = useRef(null);
  const skipMenuRef = useRef(null);
  const sortMenuRef = useRef(null);

  // Click outside detection for closing menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addMenuRef.current && !addMenuRef.current.contains(event.target)) {
        setIsAddMenuOpen(false);
      }
      if (skipMenuRef.current && !skipMenuRef.current.contains(event.target)) {
        setIsSkipMenuOpen(false);
      }
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setIsSortMenuOpen(false);
      }
    };

    // Adding event listener to handle click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sortButtononClick = () => {
    setIsAddMenuOpen(false);
    setIsSkipMenuOpen(false);
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  const skipButtononClick = () => {
    setIsAddMenuOpen(false);
    setIsSortMenuOpen(false);
    setIsSkipMenuOpen(!isSkipMenuOpen);
  };

  const handleAddButtonClick = () => {
    setIsSortMenuOpen(false);
    setIsSkipMenuOpen(false);
    setIsAddMenuOpen(!isAddMenuOpen);
  };

  const handleCheckboxClick = (event) => {
    console.log(`Checkbox ${event.target.id} clicked. Value: ${event.target.value}`);
  };

  const handleRadioClick = (event) => {
    console.log(`Radio button ${event.target.id} clicked. Value: ${event.target.value}`);
  };
  
  return (
    <MainCon>
      {/* Workflows Header */}
      <header>
        <h3 className={style.workFlow}>Workflows</h3>
        <div className={style.custom_button_container} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button onClick={sortButtononClick} className={isSortMenuOpen ? style.activeButton : ""}>
            <img src={filter} alt="Filter" />
          </button>
          <button>
            <img src={refresh} alt="Refresh" />
          </button>
          <button onClick={handleAddButtonClick} className={isAddMenuOpen ? style.activeButton : ""}>
            <img src={plus} alt="Plus" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <input type="text" placeholder="Search" className={style.workflow_search} />

      {/* Conditionally render Sort Menu */}

      {/* Add Menu */}
      {isAddMenuOpen && (
        <form id="workflow_decribe" className={`${style.workflow_add_menu} ${style.filter_menu}`} ref={addMenuRef}>
          <div className={style.menu_title} style={{ background: "#F2F2F2", borderBottom :'0px solid #98A2B3' }}>
            <span>
              <strong style={{ color: "#0C111D" }}>Add Workflow to...</strong>
            </span>
            <img className={style.close_form_btn} src={close} alt="close" onClick={handleAddButtonClick} />
          </div>
          <textarea name="decribe-wordflow" style={{border:'1px solid #98A2B3'}} rows="3" placeholder="2 line text box"></textarea>
          <button type="button" id="suggest_workflow" className={style.suggest_workflow}>
            Suggest workflow
          </button>
          <button type="button" id="skip" onClick={() => { setIsAddMenuOpen(false); setIsSkipMenuOpen(true); }} className={style.skip}>
            Skip
          </button>
        </form>
      )}

      {/* Skip Menu */}
      <div className={`${style.add_menu} ${style.filter_menu} ${isSkipMenuOpen ? style.active : ""}`} id="workflow_decribe_after_skip" style={{ display: isSkipMenuOpen ? "block" : "none", background: "#F2F2F2" }} ref={skipMenuRef}>
        <div className={style.menu_space}>
          <div className={style.menu_title} style={{ background: "#F2F2F2" }}>
            <span><strong>Add Workflow</strong></span>
            <img className={style.close_workflow_btn} src={close} alt="close" onClick={skipButtononClick} />
          </div>
          <div className={style.add_item_form}>
            {/* Form Fields */}
            <div className={style.form_group}>
              <label htmlFor="workflow">Workflow</label>
              <select name="Workflow" className={style.choose_workflow}>
                <option value="Workflow-1">Workflow-1</option>
                <option value="Workflow-2">Workflow-2</option>
                <option value="Workflow-3">Workflow-3</option>
                <option value="Workflow-4">Workflow-4</option>
              </select>
            </div>
            <div className={style.form_group}>
              <label htmlFor="workflow">Workflow Title</label>
              <input 
                              type="text" 
                              placeholder="Workflow title here" 
                              style={{ width: '100%', height: 'auto', margin: '10px 0 15px', borderRadius: '8px' }} 
                              className={style.choose_workflow} 
                            />
            </div>
            <div className={style.form_group}>
              <label htmlFor="date">Unit</label>
              <input 
                              type="date" 
                              style={{ width: '100%', height: 'auto', margin: '10px 0 15px', borderRadius: '8px' }} 
                              className={style.choose_workflow} 
                            />
            </div>
            <div className={style.form_group}>
              <label htmlFor="location">Vendor</label>
              <input 
                              type="text" 
                              placeholder="Enter Vendor" 
                              style={{ width: '100%', height: 'auto', margin: '10px 0 15px', borderRadius: '8px' }} 
                              className={style.choose_workflow} 
                            />
            </div>
            <button type="button" className={style.addButton}>Add</button>
          </div>
        </div>
      </div>

      {/* Workflows List */}
      {workFlowList.map((item) => (
        <ItemContainer key={item.id} title={item.title} des={item.des} date={item.date} ago={item.ago} city={item.city} containerColor={item.containerColor} circleColor={item.circleColor} />
      ))}

      {/* Sort Menu */}
      {isSortMenuOpen && (
        <div className={`${style.add_menu} ${style.filter_menu}`} ref={sortMenuRef} style={{ width: '80%', marginTop: '-1195px', float: 'right', border: 10, borderRadius: 10, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", position: 'relative' }}>
          <div className={style.menu_space}>
            {/* Department Section */}
            <div className={style.menu_title}>
              <span><strong>Department</strong></span>
              <p><a href="/">View all</a></p>
            </div>
            <div className={style.add_item_form}>
              {["Maintenance", "Property", "Lease", "Accounting", "Stars and Invites", "No Stars"].map((dep, index) => (
                <div key={index}>
                  <label className={style.form_group} style={{display:'flex'}}>
                    <input type="checkbox" name="department-info" value={dep.toLowerCase()} id={dep.toLowerCase().replace(/\s/g, "-")} onClick={handleCheckboxClick} 
                    style={{
                      marginRight: '8px',
                      appearance: 'none',
                      transform: 'translateY(5px)',
                      position: 'relative',
                      border: '1px solid #D0D5DD'
                  }}
                    />
                    {dep}
                  </label>
                </div>
              ))}
            </div>

            {/* Workflow Status Section */}
            <div className={style.menu_title}>
              <span><strong>Workflow Status</strong></span>
            </div>
            <div className={style.add_item_form}>
              {["Open tasks", "Closed tasks"].map((status, index) => (
                <div className={style.form_group} key={index}>
                  <label>
                    <input type="radio" name="workflow-status" value={status.toLowerCase().replace(/\s/g, "")} id={status.toLowerCase().replace(/\s/g, "_")} onClick={handleCheckboxClick} />
                    {status}
                  </label>
                </div>
              ))}
            </div>

            {/* Sort Order Section */}
            <div className={style.menu_title}>
              <span><strong>Sort Order</strong></span>
            </div>
            <div className={style.add_item_form}>
              {["Newest First", "Oldest First"].map((status, index) => (
                <div className={style.form_group} key={index}>
                  <label>
                    <input
                      type="radio"
                      name="workflow-status" // Ensures only one can be selected
                      value={status.toLowerCase().replace(/\s/g, "")}
                      id={status.toLowerCase().replace(/\s/g, "_")}
                      onClick={handleRadioClick} // Changed to handleRadioClick
                    />
                    {status}
                  </label>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </MainCon>
  );
}

export default WorkFlows;
