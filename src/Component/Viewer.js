import React, { Component } from "react";
import CornerstoneViewport from "react-cornerstone-viewport";
import { withRouter } from "react-router";
import './Viewer.css';

class Viewer extends Component {
  stack1 = ["jay"];
  state = {
    activeViewportIndex: 0,
    viewports: [0],
    tools: [
      // Mouse
      {
        name: "Wwwc",
        mode: "active",
        modeOptions: { mouseButtonMask: 1 },
      },
      {
        name: "Zoom",
        mode: "active",
        modeOptions: { mouseButtonMask: 2 },
      },
      {
        name: "Pan",
        mode: "active",
        modeOptions: { mouseButtonMask: 4 },
      },
      "Length",
      "Angle",
      "Bidirectional",
      "FreehandRoi",
      "Eraser",
      // Scroll
      { name: "StackScrollMouseWheel", mode: "active" },
      // Touch
      { name: "PanMultiTouch", mode: "active" },
      { name: "ZoomTouchPinch", mode: "active" },
      { name: "StackScrollMultiTouch", mode: "active" },
    ],
    imageIds: this.stack1,
    // FORM
    activeTool: "Wwwc",
    imageIdIndex: 0,
    isPlaying: false,
    frameRate: 22,
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
  }

  fetchData = (id) => {
    this.stack1[0] = `wadouri:https://storage.jayendramadara.repl.co/download?id=${id}`;
    console.log(this.stack1);
    console.log(this.state.imageIds, "hmm");
  };

  render() {
    return (
      <div id="viewer">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.viewports.map((vp) => (
            <CornerstoneViewport
              key={vp}
              style={{ minWidth: "100vw", height: "256px", flex: "1" }}
              tools={this.state.tools}
              imageIds={this.state.imageIds}
              imageIdIndex={this.state.imageIdIndex}
              isPlaying={this.state.isPlaying}
              frameRate={this.state.frameRate}
              className={this.state.activeViewportIndex === vp ? "active" : ""}
              activeTool={this.state.activeTool}
              setViewportActive={() => {
                this.setState({
                  activeViewportIndex: vp,
                });
              }}
            />
          ))}
        </div>

        {/* FORM */}
        <div style={{ marginTop: "35px" }}>
          <form className='row'>
            {/* FIRST COLUMN */}

            <div className='form-group'>
              <label htmlFor='active-tool'>Active Tool:</label>
              <select
                value={this.state.activeTool}
                onChange={(evt) =>
                  this.setState({ activeTool: evt.target.value })
                }
                className='form-control'
                id='active-tool'
              >
                <option value='Wwwc'>Wwwc</option>
                <option value='Zoom'>Zoom</option>
                <option value='Pan'>Pan</option>
                <option value='Length'>Length</option>
                <option value='Angle'>Angle</option>
                <option value='Bidirectional'>Bidirectional</option>
                <option value='FreehandRoi'>Freehand</option>
                <option value='Eraser'>Eraser</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Viewer);
