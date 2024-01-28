import React, { useState } from 'react'

function Card({username = 'Mottu', post ="not assigned"}) {
    
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum quos corrupti quo corporis ipsa qui, quis enim dicta libero repellat at dolorem ipsum soluta voluptate! Totam eaque recusandae officiis.
                    </p>
                </blockquote>
                <figcaption>
                        <div>
                            {username}
                        </div>
                        <div>
                           {post}
                        </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card
