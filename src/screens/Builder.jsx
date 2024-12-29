
import Navbar from '../components/Navbar';
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CanvasArea from "../components/CanvasArea";
import ToolsPanel from "../components/ToolsPanel";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/origami.png";

const Builder = () => {
  const [zoom, setZoom] = useState(100);
  const [pages, setPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [textBoxes, setTextBoxes] = useState([]); // Manage text boxes
  const [shapes, setShapes] = React.useState([]);
  const [icons,setIcons]=React.useState([]);
 
  const navigate = useNavigate();

  const addShape = (type) => {
    const newShape = {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      color: "black",
    };
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  const addIcons=(type)=>{
    const newIcon={
      id:Date.now(),
      type,
      color:"black",
      x:100,
      y:100,
      width:30,
      height:30
    };
    setIcons((prevIcons)=>[...prevIcons,newIcon]);
  }
  const handleZoom = (value) => {
    setZoom(value);
  };

  const addPage = () => {
    setPages((prev) => [...prev, prev.length + 1]);
  };

  const addTextBox = () => {
    setTextBoxes((prev) => [
      ...prev,
      {
        x: 50,
        y: 50,
        text: "New Text",
        page: currentPage,
        font: "Times New Roman",
        color: "black",
        style: "bold",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "left",
      },
    ]);
  };

  return (
    <Box>
      <Navbar/>
    <Box display="flex" height="100vh">
      
      {/* Tools Panel */}
      <ToolsPanel addTextBox={addTextBox} addShape={addShape} addIcon={addIcons}/>

      {/* Main Canvas Area */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        justifyContent="center"
        bgcolor="grey.100"
      >
        {/* Zoom Controls */}
        <Box display="flex" alignItems="center" mb={2} gap={1}>
          <IconButton onClick={() => handleZoom(Math.max(zoom - 10, 50))} disabled={zoom <= 50}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{zoom}%</Typography>
          <IconButton onClick={() => handleZoom(Math.min(zoom + 10, 200))} disabled={zoom >= 200}>
            <AddIcon />
          </IconButton>
        </Box>

        {/* Display Current Page */}
        <Box display="flex" mb={2} maxWidth="100%" overflow="auto">
          <CanvasArea 
          key={currentPage} 
          zoom={zoom} 
          pageNumber={currentPage} 
          textBoxes={textBoxes.filter((box) => box.page === currentPage)} // Filter by page
          setTextBoxes={setTextBoxes}
          shapes={shapes}
          setShapes={setShapes}
          icons={icons}
          setIcons={setIcons}/>
        </Box>

        {/* Add Page Button */}
        <Button variant="contained" color="primary" onClick={addPage}>
          Add Page
        </Button>
      </Box>

      {/* Carousel of Pages (Right side) */}
      <Box
        width="300px"
        p={2}
        display="flex"
        flexDirection="column"
        bgcolor="white"
        boxShadow={3}
        borderRadius={2}
        gap={2}
      >
        <Typography variant="h6" align="center">
          Pages
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
        {pages.map((page) => (
              <Button
                key={page}
                variant="outlined"
                onClick={() => setCurrentPage(page)}
                sx={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  border:
                    page === currentPage ? "2px solid blue" : "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "8px",
                  backgroundColor:
                    page === currentPage ? "#e3f2fd" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      page === currentPage ? "#c8e6c9" : "#f1f1f1",
                  },
                }}
              >
                Page {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Builder;