import img1 from '../../images/img1.svg'
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";
const initialState={
    packages:[
  {id:'p1',
    name: "Premium",
    img: img1,
    jobWillBeDisplayed: "30 hours per month",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores, fugit sunt voluptatem dolorem nisi saepe cum corrupti. Nostrum, perspiciatis!",
      price:70
  },
  {id:'p2',
    name: "Standard",
    img: img2,
    jobWillBeDisplayed: "20 hours per month",
    description:
      " Animi numquam a rem autem ipsum beatae enim aspernatur facilis nisi alias. Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 50
  },
  {id:'p3',
    name: "Basic",
    img: img3,
    jobWillBeDisplayed: "10 hours per month",
    description:
      " Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam .",
      price:30
  },
]
}


const packageReducer=(state = initialState, action)=>{

 switch (action.type) {
   case "SHOW_ALL_PACKAGES": {
     return state;
   }
   default: {
     return state;
   }
 }

}

export default packageReducer