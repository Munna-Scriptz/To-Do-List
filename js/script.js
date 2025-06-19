// -------------------Dom Elements 
let TodoBox = document.querySelector('.To-Do_Box')
let ClickCount = 0
let ListCount = document.querySelector('.ListCount')
let InputError = document.querySelector('.error')
let NoTask = document.querySelector('.no_task')
let CompletedTodo = 0
let TickTodo = document.querySelector('.CompletedTodo')
// ------Tick Dodo

// -------------------To-Do Add Doms 
let AddTodoInput = document.querySelector('.todo_add_input')
let AddTodoButton = document.querySelector('Subscribe-btn')

let HandelButton = () => {
  if (AddTodoInput.value == '') {
    InputError.style.display = 'flex';
    InputError.style.opacity = '0';
    InputError.style.transform = 'translateX(100px)';
    InputError.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';

    requestAnimationFrame(() => {
      InputError.style.opacity = '1';
      InputError.style.transform = 'translateX(0)';
    });
    setTimeout(() => {
      InputError.style.opacity = '0';
      InputError.style.transform = 'translateX(100px)';
      setTimeout(() => {
        InputError.style.display = 'none';
      }, 400);
    }, 3000);
  } else {

    // --------List Count
    ClickCount++
    ListCount.innerHTML = ClickCount
    if (ClickCount == 6 || ClickCount == 0) {
      ClickCount--
      ListCount.innerHTML = 5

      if (ListCount.innerHTML === 0) {
        NoTask.style = 'display:block;'
      }
    } else {
      NoTask.style = 'display:none;'
      // -------------Main ToDo Div
      let TodoList = document.createElement('div') // main todo div
      TodoBox.appendChild(TodoList) // main todo div
      TodoList.classList.add('todo_list') // main todo div

      // -------------------------------To-Do Check Box Start
      // -------------Create Html tags
      let tickButton = document.createElement('label')
      let tickLabel2 = document.createElement('label')
      let checkbox = document.createElement('input')
      let CheckSpan = document.createElement('span')

      // -------------Making Child and class
      TodoList.appendChild(tickButton)
      tickButton.classList.add('checkbox-btn')
      tickButton.appendChild(tickLabel2)
      tickButton.appendChild(checkbox)
      checkbox.setAttribute('type', 'checkbox')
      tickButton.appendChild(CheckSpan)
      CheckSpan.classList.add('checkmark')
      // -------------------------------To-Do Check Box End
      let ProgressBar = document.querySelector('.progress_bar')
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          CompletedTodo++
          
        } else {
          CompletedTodo--
        }
        TickTodo.innerHTML = CompletedTodo

        if(CompletedTodo == 0){
          ProgressBar.style = 'transform: translateX(-300px);'
        }
        if(CompletedTodo == 1){
          ProgressBar.style = 'transform: translateX(-120px);'
        }
        if(CompletedTodo == 2){
          ProgressBar.style = 'transform: translateX(-100px);'
        }
        if(CompletedTodo == 3){
          ProgressBar.style = 'transform: translateX(-80px);'
        }
        if(CompletedTodo == 4){
          ProgressBar.style = 'transform: translateX(-40px);'
        }
        if(CompletedTodo == 5){
          ProgressBar.style = 'transform: translateX(0px);'
        }
      })
      // ---------------------------To-Do Input Start
      let TodoInput = document.createElement('input')
      TodoList.appendChild(TodoInput)
      TodoInput.classList.add('TodoInputBox')

      TodoInput.value = AddTodoInput.value
      AddTodoInput.value = ''

      TodoInput.setAttribute('readonly', 'readonly')
      TodoInput.style = 'cursor:default;'
      // ---------------------------To-Do Input End


      // --------------------------------------To-Do Edit Start
      // -------------Create Html tags
      let EditNDel = document.createElement('div')
      let EditButton = document.createElement('button')
      let editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      let editPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      // -------------Making Child and class
      TodoList.appendChild(EditNDel)
      EditNDel.classList.add('right_buttons')
      EditNDel.appendChild(EditButton)
      EditButton.classList.add('editBtn')
      EditButton.appendChild(editSvg)
      editSvg.setAttribute('viewBox', '0 0 512 512')
      editSvg.appendChild(editPath)
      editPath.setAttribute('d', 'M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z')
      EditButton.addEventListener('click', () => {
        EditButton.classList.toggle('edit')

        if (EditButton.classList[1] == 'edit') {
          TodoInput.removeAttribute('readonly', 'readonly')
          EditButton.innerHTML = `<i class="bx bxs-save " />`

        } else {
          TodoInput.setAttribute('readonly', 'readonly')
          EditButton.innerHTML = ``
          EditButton.appendChild(editSvg)


        }
      })
      // ----------------------------------------To-Do Edit End

      // ---------------------------To-Do Delete Start
      // -------------Create Html tags
      let BinButton = document.createElement('button')
      let BinSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      let SvgLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      let SvgLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      // -------------Making Child and class
      EditNDel.appendChild(BinButton)
      BinButton.classList.add('bin-button')
      // svg 1----
      BinButton.appendChild(BinSvg)
      BinSvg.classList.add('bin-top')
      BinSvg.setAttribute('viewBox', '0 0 39 7')
      BinSvg.setAttribute('fill', 'none')
      BinSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      BinSvg.appendChild(SvgLine1)
      SvgLine1.setAttribute('y1', '5')
      SvgLine1.setAttribute('x2', '39')
      SvgLine1.setAttribute('y2', '5')
      SvgLine1.setAttribute('stroke', 'white')
      SvgLine1.setAttribute('stroke-width', '4')
      BinSvg.appendChild(SvgLine2)
      SvgLine2.setAttribute('x1', '12')
      SvgLine2.setAttribute('y1', '1.5')
      SvgLine2.setAttribute('x2', '26.0357')
      SvgLine2.setAttribute('y2', '1.5')
      SvgLine2.setAttribute('stroke', 'white')
      SvgLine2.setAttribute('stroke-width', '3')
      // svg 2----
      let BinSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      let SvgMask1 = document.createElementNS('http://www.w3.org/2000/svg', 'mask')
      let MaskPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      let SvgPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      let SvgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      let SvgPath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      // -------------Making Child and class
      BinButton.appendChild(BinSvg2)
      BinSvg2.classList.add('bin-bottom')
      BinSvg2.setAttribute('viewBox', '0 0 33 39')
      BinSvg2.setAttribute('fill', 'none')
      BinSvg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      BinSvg2.appendChild(SvgMask1)
      SvgMask1.setAttribute('id', 'path-1-inside-1_8_19')
      SvgMask1.setAttribute('fill', 'white')
      SvgMask1.appendChild(MaskPath1)
      MaskPath1.setAttribute('d', 'M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z')
      BinSvg2.appendChild(SvgPath1)
      SvgPath1.setAttribute('d', 'M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z')
      SvgPath1.setAttribute('fill', 'white')
      SvgPath1.setAttribute('mask', 'url(#path-1-inside-1_8_19)')
      BinSvg2.appendChild(SvgPath2)
      SvgPath2.setAttribute('d', 'M12 6L12 29')
      SvgPath2.setAttribute('stroke', 'white')
      SvgPath2.setAttribute('stroke-width', '4')
      BinSvg2.appendChild(SvgPath3)
      SvgPath3.setAttribute('d', 'M21 6V29')
      SvgPath3.setAttribute('stroke', 'white')
      SvgPath3.setAttribute('stroke-width', '4')
      // ---------------------------To-Do Delete End

      // ---------------------------To-Do Remove
      BinButton.addEventListener('click', () => {
        ClickCount--
        ListCount.innerHTML = ClickCount
        TodoList.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.36, -0.64, 0.34, 1.76)';
        TodoList.style.opacity = '0';
        TodoList.style.transform = 'scale(0.6) translateY(20px)';
        if(checkbox.checked){
          CompletedTodo--
          TickTodo.innerHTML = CompletedTodo

          if(CompletedTodo == 0){
          ProgressBar.style = 'transform: translateX(-300px);'
        }
        if(CompletedTodo == 1){
          ProgressBar.style = 'transform: translateX(-120px);'
        }
        if(CompletedTodo == 2){
          ProgressBar.style = 'transform: translateX(-100px);'
        }
        if(CompletedTodo == 3){
          ProgressBar.style = 'transform: translateX(-80px);'
        }
        if(CompletedTodo == 4){
          ProgressBar.style = 'transform: translateX(-40px);'
        }
        if(CompletedTodo == 5){
          ProgressBar.style = 'transform: translateX(0px);'
        }
        }
        setTimeout(() => {
          TodoList.remove();
        }, 500);

      })
      // ------------------------tick Button



      // tickTodoButton.addEventListener('change', () => {
      //   if (checkbox.checked) {
      //     CompletedTodo++;
      //   } else {
      //     CompletedTodo--;
      //   }
      //   TickTodo.innerHTML = CompletedTodo;
      // });






      // -------------To-Do Animations

      TodoList.style.opacity = '0';
      TodoList.style.transform = 'scale(0.7)';
      TodoList.style.transition = 'opacity 0.4s ease-out, transform 0.6s cubic-bezier(0.22, 1.5, 0.36, 1)';

      requestAnimationFrame(() => {
        TodoList.style.opacity = '1';
        TodoList.style.transform = 'scale(1)';
      });

    }
  }


}

































// ----------------------------particle js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 2000
      }
    },
    color: {
      value: ["#FF5454", "#FF95C5", "#E01E5B", "#36C5F0"]
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});