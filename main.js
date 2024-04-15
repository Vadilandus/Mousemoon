let test;

document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определlet test;


window.onload=function(){
  let star = document.querySelector('.star2');
  let auth = document.querySelector('.da');

  auth.addEventListener('click',function(e){
    if (star.style.opacity = '100%'){
      star.style.opacity = '0%'
    }else{
      star.style.opacity = '100%';
    }

  })

}

document.addEventListener('DOMContentLoaded', () => {














    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
        el.style.display = 'block'
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
        if (target.closest('#too')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active') // удаляем активный класс
          }
          if (target.closest('#too1')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active1') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active1') // удаляем активный класс
          }  
          window.addEventListener('mouseout', function(){
            let el1 = document.querySelector('.follow-cursor')
            el1.style.display = "none"
          })
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })


яем, где находится курсор
        if (!target) return
        el.style.display = 'block'
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
        if (target.closest('#too')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active') // удаляем активный класс
          }
          if (target.closest('#too1')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active1') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active1') // удаляем активный класс
          }  
          window.addEventListener('mouseout', function(){
            let el1 = document.querySelector('.follow-cursor')
            el1.style.display = "none"
          })
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })
