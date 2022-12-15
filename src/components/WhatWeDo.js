import React from 'react'
import understandPic from '../images/what_we_do/understand.jpeg'
import analyzePic from '../images/what_we_do/analyze.jpg';
import consultPic from '../images/what_we_do/consult.jpg';
import planPic from '../images/what_we_do/plan.jpg';
import assignPic from '../images/what_we_do/assign.jpg';
import achievePic from '../images/what_we_do/achieve.jpg';

function WhatWeDo() {
  return (
    <div className="what-we-do">
        <h1>What We Do?</h1>
        <div className="underline"></div>

        <div className="container">
            
            <div className="box box-1">
                <img src={understandPic} alt="" />
                <h2>Understand</h2>
                <p>
                    We understand your requirements and goals
                </p>
            </div>

            <div className="box box-2">
                <img src={analyzePic} alt="" />
                <h2>Analyze</h2>
                <p>
                    We analyze your current position and goals.
                </p>
            </div>

            <div className="box box-3">
                <img src={consultPic} alt="" />
                <h2>Consult</h2>
                <p>
                    We consult with medical professionsals only if required.
                </p>
            </div>

            <div className="box box-4">
                <img src={planPic} alt="" />
                <h2>Understand</h2>
                <p>
                    We plan the perfect workout to get maximu result for you.
                </p>
            </div>

            <div className="box box-5">
                <img src={assignPic} alt="" />
                <h2>Assign</h2>
                <p>
                    We assign a knowledgeable and experienced trainer.
                </p>
            </div>

            <div className="box box-6">
                <img src={achievePic} alt="" />
                <h2>Achieve</h2>
                <p>
                    Achieve your goals with a dedicated trainer always by your side.
                </p>
            </div>

        </div>
    </div>
  )
}

export default WhatWeDo