import React, { useState } from "react";
import "./style.css"

function StaticForum() {

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);

    function handleClick() {
        setExpanded(!expanded);
      }
    
      function handleClick1() {
        setExpanded1(!expanded1);
      }

    return (
        <div className='pages'>
            <h1>Outstanding issues forum</h1>
            <h3>All comments are moderated.</h3>
            <div className='forum'>
                <div className='forum__post'>
                    <p className="forumcontent">Accidentally deleted all of my untracked folders with Git Clear - am I screwed?</p>
                    <h4 className="forumcontent">@Ihategit2023</h4>
                    <button onClick={handleClick}>+</button>
                    {expanded && (
                        <div>
                        <div className="expand-content">
                                <p>Hi everyone. I was trying to remove some untracked changes so I used the git clear function to force it through. Here's the problem - I have quite a few folders for note purposes that I don't commit to a repo and it removed them. Am I screwed?</p>
                                <h4>@Ihategit2023</h4>
                            </div>
                            <div className="expand-content">
                                <p>Unfortunatley so. Git clear is a very powerful, albeit misused, tool.</p>
                                <h4>@infinitejest541</h4>
                            </div>
                            <div className="expand-content">
                                <p>If you have backup software, now might be an optimal time to use it!</p>
                                <h4>@adamaronson10</h4>
                            </div>
                            <div className="expand-content">
                                <p>Try using the command git reflog to see if you can find the commit you deleted.</p>
                                <h4>@gitguru</h4>
                            </div>
                            <div className="expand-content">
                                <p>Thanks guys, that's very helpful!</p>
                                <h4>@Ihategit2023</h4>
                            </div>
                        </div>
                    )}
                    
                </div>

                <div className='forum__post'>
                    <p className="forumcontent">Line breaks being overriden?</p>
                    <h4 className="forumcontent">@anxiousCSSer</h4>
                    <button onClick={handleClick1}>+</button>
                    {expanded1 && (
                        <div>
                            <div className="expand-content">
                                <p>I'm using a series of HR tags to create breaks in my work but they won't show on the actual live page. Why is this?</p>
                                <h4>@anxiousCSSer</h4>
                            </div>
                            <div className="expand-content">
                                <p>If you have backup software, now might be an optimal time to use it!</p>
                                <h4>@adamaronson10</h4>
                            </div>
                            <div className="expand-content">
                                <p>Try using the command git reflog to see if you can find the commit you deleted.</p>
                                <h4>@gitguru</h4>
                            </div>
                            <div className="expand-content">
                                <p>Thanks guys, that's very helpful!</p>
                                <h4>@Ihategit2023</h4>
                            </div>
                        </div>
                    )}
                    
                </div>

            </div>
        </div>
    )
}

export default StaticForum