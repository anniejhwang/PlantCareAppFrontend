import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PlantsIndex } from "./PlantsIndex";
import { Modal } from "./Modal";
import { PlantsShow } from "./PlantsShow";
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesShow } from "./SchedulesShow";
import { SchedulesNew } from "./SchedulesNew";
import { Link } from "react-router-dom";
import { Home } from "./Home";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const [schedules, setSchedules] = useState([]);
  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({});

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json?page_number=4").then((response) => {
      console.log(response.data);
      setPlants(response.data.data);
    });
  };

  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantsShowVisible(true);
    setCurrentPlant(plant);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
    setIsSchedulesShowVisible(false);
  };

  useEffect(handleIndexPlants, []);

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setSchedules([...schedules, response.data]);
      successCallback();
    });
  };

  const handleShowSchedule = (schedule) => {
    console.log("handleShowSchedule", schedule);
    setIsSchedulesShowVisible(true);
    setCurrentSchedule(schedule);
  };

  const handleUpdateSchedule = (id, params, successCallback) => {
    console.log("handleUpdateSchedule", params);
    axios.patch(`http://localhost:3000/schedules/${id}.json`, params).then((response) => {
      setSchedules(
        schedules.map((schedule) => {
          if (schedule.id === response.data.id) {
            return response.data;
          } else {
            return schedule;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroySchedule = (schedule) => {
    console.log("handleDestroySchedule", schedule);
    axios.delete(`http://localhost:3000/schedules/${schedule.id}.json`).then((response) => {
      setSchedules(schedules.filter((p) => p.id !== schedule.id));
      handleClose();
    });
  };

  useEffect(handleIndexSchedules, []);

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const [isLogoutLinkVisible, setIsLogoutLinkVisible] = useState(false);

  const handleLogoutLinkShow = () => {
    setIsLogoutLinkVisible(true);
  };

  const handleLogoutLinkClose = () => {
    setIsLogoutLinkVisible(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/plants" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        <Route
          path="schedules"
          element={<SchedulesIndex schedules={schedules} onShowSchedule={handleShowSchedule} />}
        />
      </Routes>
      {
        <Modal show={isPlantsShowVisible} onClose={handleClose}>
          <PlantsShow plant={currentPlant} />
          <SchedulesNew onCreateSchedule={handleCreateSchedule} plant={currentPlant} />
        </Modal>
      }
      <Modal show={isSchedulesShowVisible} onClose={handleClose}>
        <SchedulesShow
          schedule={currentSchedule}
          onUpdateSchedule={handleUpdateSchedule}
          onDestroySchedule={handleDestroySchedule}
        />
      </Modal>
    </div>
  );
}
