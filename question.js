

//Array of Objects

const quiz = [
    
    {
        q: "1. Способы задания фуункции:",
        answer: 0,
        options: [
            { text: 'Аналитический, графический, табличный', img: '' },
            { text: 'Аналитический,, табличный, алгебраический', img: '' },
            { text: 'Алгебраический, алгебраический, графический', img: '' },
            { text: 'Табличный, аналитический', img: '' }
        ]
        // solutionImg: "llll"
    },
    {
        q: "2. Монотоность - это...",
        answer: 0,
        options: [
            { text: 'Свойство функции', img: '' },
            { text: 'Область функции', img: '' },
            { text: 'Вид функции', img: '' },
            { text: 'Способ задания йункции', img: '' }
        ]
        
    },
    {
        q: "3. Какая из перечисленный функции является алгебраической?",
        answer: 0,
        options: [
            { text: '', img: 'Question/3/3.1.jpg' },
            { text: '', img: 'Question/3/3.2.jpg' },
            { text: '', img: 'Question/3/3.3.jpg' },
            { text: '', img: 'Question/3/3.4.jpg' }
        ]
    },
    {
        q: "4. Функция является честной, если выполняется условия:",
        answer: 0,
        options: [
            { text: '', img: 'Question/4/4.1.jpg' },
            { text: '', img: 'Question/4/4.2.jpg' },
            { text: '', img: 'Question/4/4.3.jpg' },
            { text: '', img: 'Question/4/4.4.jpg' }
        ]
    },
    {
        q: "5. Какая функция является четной?",
        answer: 0,
        options: [
            { text: '', img: 'Question/5/5.1.jpg' },
            { text: '', img: 'Question/5/5.2.jpg' },
            { text: '', img: 'Question/5/5.3.jpg' },
            { text: '', img: 'Question/5/5.4.jpg' }
        ]
    },
    {
        q: "6. Какое утверждение верно?",
        answer: 1,
        options: [
            { text: 'график нечетной функции симметричен относительно оси абсцисс', img: '' },
            { text: 'график нечетной функции симметричен относительно начала координат', img: '' },
            { text: 'график нечетной функции симметричен относительно оси ординат', img: '' },
            { text: 'график четной функции симметричен относительно оси абсцисс', img: '' }
        ]
    },
    {
        
        q: "7. Вычислить:",
        img: "Question/7/7.jpg",
        answer: 0,
        options: [
            { text: '4', img: '' },
            { text: '5', img: '' },
            { text: '3', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/7/7.0.jpg"
    },
    {
        
        q: "8. Вычислить:",
        img: "Question/8/8.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '1', img: '' },
            { text: '2', img: '' },
            { text: '3', img: '' }
        ],
        solutionImg: "Question/8/8.0.jpg"
    },
    {
        q: "9. Какая функция является переидической?",
        answer: 1,
        options: [
            { text: '', img: 'Question/9/9.2.jpg' },
            { text: '', img: 'Question/9/9.1.jpg' },
            { text: '', img: 'Question/9/9.3.jpg' },
            { text: '', img: 'Question/9/9.4.jpg' }
        ],
        solutionImg: "Question/9/9.0.jpg"
    },
    {
        q: "10. Найти область определения функции:",
        img: "Question/10/10.jpg",
        answer: 0,
        options: [
            { text: 'x ∈ (-∞;6]⋃[6;+∞)', img: '' },
            { text: 'x ∈ (+;6)⋃(6;-∞)', img: '' },
            { text: 'x ∉ (+;6)⋃(6;-∞)', img: '' },
            { text: 'x ∉ (-∞;6)⋃(6;+∞)', img: '' }
        ],
        solutionImg: "Question/10/10.0.jpg"
    },
    {
        q: "11. Найти область определения функции: y = cosx",
        answer: 0,
        options: [
            { text: '(-∞;+∞)', img: '' },
            { text: '(+∞;-∞)', img: '' },
            { text: '0', img: '' },
            { text: '1', img: '' }
        ],
        solutionImg: "Question/11/11.0.jpg"
    },
    {
        q: "12. Найти область определенися функции",
        img: "Question/12/12.jpg",
        answer: 0,
        options: [
            { text: '(-∞;5)', img: '' },
            { text: '(+∞;4)', img: '' },
            { text: '(-∞;+∞)', img: '' },
            { text: '(+∞;-∞)', img: '' }
        ],
        solutionImg: "Question/12/12.0.jpg"
    },
    {
        q: "13. Найти область определенися функции",
        img: "Question/13/13.jpg",
        answer: 0,
        options: [
            { text: '(-2;+∞)', img: '' },
            { text: '(-∞;5)', img: '' },
            { text: '(-4;+∞)', img: '' },
            { text: '(+∞;-7)', img: '' }
        ],
        solutionImg: "Question/13/13.0.jpg"
    },
    {
        q: "14. Вычислить предел:",
        img: "Question/14/14.jpg",
        answer: 0,
        options: [
            { text: '3', img: '' },
            { text: '4', img: '' },
            { text: '5', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/14/14.0.jpg"
    },
    {
        q: "15. Вычислить предел:",
        img: "Question/15/15.jpg",
        answer: 0,
        options: [
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '3', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/15/15.0.jpg"
    },
    {
        q: "16. Вычислить предел:",
        img: "Question/16/16.jpg",
        answer: 0,
        options: [
            { text: '9', img: '' },
            { text: '10', img: '' },
            { text: '8', img: '' },
            { text: '7', img: '' }
        ],
        solutionImg: "Question/16/16.0.jpg"
    },
    {
        q: "17. Вычислить предел:",
        img: "Question/17/17.jpg",
        answer: 0,
        options: [
            { text: '3', img: '' },
            { text: '6', img: '' },
            { text: '4', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/17/17.0.jpg"
    },
    {
        q: "18. Найдите производную функции:",
        img: "Question/18/18.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/18/18.1.jpg' },
            { text: '', img: 'Question/24/24.1.jpg' },
            { text: '', img: 'Question/25/25.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' }
        ],
        solutionImg: "Question/18/18.0.jpg"
    },
    {
        q: "19. Вычислить предел:",
        img: "Question/19/19.jpg",
        answer: 0,
        options: [
            { text: '7', img: '' },
            { text: '8', img: '' },
            { text: '9', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/19/19.0.jpg"
    },
    {
        q: "20. Вычислить предел:",
        img: "Question/20/20.jpg",
        answer: 0,
        options: [
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '6', img: '' },
            { text: '3', img: '' }
        ],
        solutionImg: "Question/20/20.0.jpg"
    },
    {
        q: "21. Вычислить предел:",
        img: "Question/21/21.jpg",
        answer: 0,
        options: [
            { text: '-1', img: '' },
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/21/21.0.jpg"
    },
    {
        q: "22. Вычислить предел:",
        img: "Question/22/22.jpg",
        answer: 0,
        options: [
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '3', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/22/22.0.jpg"
    },
    {
        q: "23. Вычислить предел:",
        img: "Question/23/23.jpg",
        answer: 0,
        options: [
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/23/23.0.jpg"
    },
    {
        q: "24. Найти производную функции:",
        img: "Question/24/24.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/24/24.1.jpg' },
            { text: '', img: 'Question/25/25.1.jpg' },
            { text: '', img: 'Question/18/18.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' }
        ],
        solutionImg: "Question/24/24.0.jpg"
    },
    {
        q: "25. Найти производную функции:",
        img: "Question/25/25.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/25/25.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' },
            { text: '', img: 'Question/24/24.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' }
        ],
        solutionImg: "Question/25/25.0.jpg"
    },
    {
        q: "26. Найти производную функции:",
        img: "Question/26/26.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/26/26.1.jpg' },
            { text: '', img: 'Question/24/24.1.jpg' },
            { text: '', img: 'Question/25/25.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' }
        ],
        solutionImg: "Question/26/26.0.jpg"
    },
    {
        q: "27. Найти область определения функции:",
        img: "Question/27/27.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/24/24.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' },
            { text: '', img: 'Question/25/25.1.jpg' }
        ],
        solutionImg: "Question/27/27.0.jpg"
    },
    {
        q: "28. Найти область определения функции:",
        img: "Question/28/28.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/24/24.1.jpg' }
        ],
        solutionImg: "Question/28/28.0.jpg"
    },
    {
        q: "29. Найти область определения функции:",
        img: "Question/29/29.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/29/29.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/26/26.1.jpg' }
        ],
        solutionImg: "Question/29/29.0.jpg"
    },
    {
        q: "30. Вычислить:",
        img: "Question/30/30.jpg",
        answer: 0,
        options: [
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' },
            { text: '2 ', img: '' }
        ],
        solutionImg: "Question/30/30.0.jpg"
    },
    {
        q: "31. Вычислить:",
        img: "Question/31/31.jpg",
        answer: 0,
        options: [
            { text: '2', img: '' },
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' }
        ],
        solutionImg: "Question/31/31.0.jpg"
    },
    {
        q: "32. Вычислить:",
        img: "Question/32/32.jpg",
        answer: 0,
        options: [
            { text: '4', img: '' },
            { text: '3', img: '' },
            { text: '5', img: '' },
            { text: '6', img: '' }
        ],
        solutionImg: "Question/32/32.0.jpg"
    },
    {
        q: "33. Найти область оопределения функции:",
        img: "Question/33/33.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/33/33.1.jpg' },
            { text: '', img: 'Question/29/29.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' }
        ],
        solutionImg: "Question/33/33.0.jpg"
    },
    {
        q: "34. ",
        img: "Question/34/34.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/34/34.1.jpg' },
            { text: '', img: 'Question/33/33.1.jpg' },
            { text: '', img: 'Question/29/29.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' }
        ],
        solutionImg: "Question/34/34.0.jpg"
    },
    {
        q: "35. ",
        img: "Question/35/35.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/35/35.1.jpg' },
            { text: '', img: 'Question/36/36.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/33/33.1.jpg' }
        ],
        solutionImg: "Question/35/35.0.jpg"
    },
    {
        q: "36. ",
        img: "Question/36/36.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/36/36.1.jpg' },
            { text: '', img: 'Question/35/35.1.jpg' },
            { text: '', img: 'Question/37/37.1.jpg' },
            { text: '', img: 'Question/38/38.1.jpg' }
        ],
        solutionImg: "Question/36/36.0.jpg"
    },
    {
        q: "37. ",
        img: "Question/37/37.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/37/37.1.jpg' },
            { text: '', img: 'Question/36/36.1.jpg' },
            { text: '', img: 'Question/35/35.1.jpg' },
            { text: '', img: 'Question/38/38.1.jpg' }
        ],
        solutionImg: "Question/37/37.0.jpg"
    },
    {
        q: "38. ",
        img: "Question/38/38.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/38/38.1.jpg' },
            { text: '', img: 'Question/36/36.1.jpg' },
            { text: '', img: 'Question/37/37.1.jpg' },
            { text: '', img: 'Question/35/35.1.jpg' }
        ],
        solutionImg: "Question/38/38.0.jpg"
    },
    {
        q: "39. ",
        img: "Question/39/39.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/39/39.1.jpg' },
            { text: '', img: 'Question/37/37.1.jpg' },
            { text: '', img: 'Question/35/35.1.jpg' },
            { text: '', img: 'Question/36/36.1.jpg' }
        ],
        solutionImg: "Question/39/39.0.jpg"
    },
    {
        q: "40. ",
        img: "Question/40/40.jpg",
        answer: 0,
        options: [
            { text: '2', img: '' },
            { text: '3', img: '' },
            { text: '4', img: '' },
            { text: '1', img: '' }
        ],
        solutionImg: "Question/40/40.0.jpg"
    },
    {
        q: "41. ",
        img: "Question/41/41.jpg",
        answer: 0,
        options: [
            { text: '1', img: '' },
            { text: '2', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' }
        ],
        solutionImg: "Question/41/41.0.jpg"
    },
    {
        q: "42. ",
        img: "Question/42/42.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '-1', img: '' },
            { text: '1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/42/42.0.jpg"
    },
    {
        q: "43. ",
        img: "Question/43/43.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '1', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/43/43.0.jpg"
    },
    {
        q: "44. ",
        img: "Question/44/44.jpg",
        answer: 0,
        options: [
            { text: '1/6', img: '' },
            { text: '1/2', img: '' },
            { text: '1/3', img: '' },
            { text: '1', img: '' }
        ],
        solutionImg: "Question/44/44.0.jpg"
    },
    {
        q: "45. ",
        img: "Question/45/45.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '1', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/45/45.0.jpg"
    },
    {
        q: "46. ",
        img: "Question/46/46.jpg",
        answer: 0,
        options: [
            { text: '1/8', img: '' },
            { text: '1/4', img: '' },
            { text: '1/2', img: '' },
            { text: '1', img: '' }
        ],
        solutionImg: "Question/46/46.0.jpg"
    },
    { 
        q: "47. ",
        img: "Question/47/47.jpg",
        answer: 0,
        options: [
            { text: '-2', img: '' },
            { text: '2', img: '' },
            { text: '1', img: '' },
            { text: '0', img: '' }
        ],
        solutionImg: "Question/47/47.0.jpg"
    },
    {
        q: "48. ",
        img: "Question/48/48.jpg",
        answer: 0,
        options: [
            { text: 'e', img: '' },
            { text: '-e', img: '' },
            { text: '0', img: '' },
            { text: '1', img: '' }
        ],
        solutionImg: "Question/48/48.0.jpg"
    },
    {
        q: "49. ",
        img: "Question/49/49.jpg",
        answer: 0,
        options: [
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' },
            { text: 'e', img: '' }
        ],
        solutionImg: "Question/49/49.0.jpg"
    },
    {
        q: "50. ",
        img: "Question/50/50.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/50/50.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/29/29.1.jpg' }
        ],
        solutionImg: "Question/50/50.0.jpg"
    },
    {
        q: "51. ",
        img: "Question/51/51.jpg",
        answer: 0,
        options: [
            { text: '4', img: '' },
            { text: '5', img: '' },
            { text: '3', img: '' },
            { text: '0', img: '' }
        ],
        solutionImg: "Question/51/51.0.jpg"
    },
    {
        q: "52. ",
        img: "Question/52/52.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '1', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/52/52.0.jpg"

    },
    {
        q: "53. ",
        img: "Question/53/53.jpg",
        answer: 0,
        options: [
            { text: '6', img: '' },
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '7', img: '' }
        ],
        solutionImg: "Question/53/53.0.jpg"
    },
    {
        q: "54. ",
        img: "Question/54/54.jpg",
        answer: 0,
        options: [
            { text: '1', img: '' },
            { text: '0', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/54/54.0.jpg"
    },
    {
        q: "55. ",
        img: "Question/55/55.jpg",
        answer: 0,
        options: [
            { text: '6', img: '' },
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '7', img: '' }
        ],
        solutionImg: "Question/55/55.0.jpg"
    },
    { 
        q: "56. ",
        img: "Question/56/56.jpg",
        answer: 0,
        options: [
            { text: '13', img: '' },
            { text: '12', img: '' },
            { text: '10', img: '' },
            { text: '11', img: '' }
        ],
        solutionImg: "Question/56/56.0.jpg"
    },
    {
        q: "57. ",
        img: "Question/57/57.jpg",
        answer: 0,
        options: [
            { text: 'x1 = 1 y1 = 3 x2 = 0 y2 = 0', img: '' },
            { text: 'x1 = 0 y1 = 2 x2 = 1 y2 = 3', img: '' },
            { text: 'x1 = 1 y1 = 3 x2 = 0 y2 = 3', img: '' },
            { text: 'x1 = 0 y1 = 1 x2 = 2 y2 = 2', img: '' }
        ],
        solutionImg: "Question/57/57.0.jpg"
    },
    {
        q: "58. ",
        answer: 0,
        img: "Question/58/58.jpg",
        answer: 0,
        options: [
            { text: '2y', img: '' },
            { text: 'y', img: '' },
            { text: '-y', img: '' },
            { text: '2-y', img: '' }
        ],
        solutionImg: "Question/58/58.0.jpg"
    },
    {
        q: "59. ",
        img: "Question/59/59.jpg",
        answer: 0,
        options: [
            { text: 'Dx + 3Dy', img: '' },
            { text: '3Dx + 2Dy', img: '' },
            { text: '- Dx + 2Dy', img: '' },
            { text: 'Dx - 2Dy', img: '' }
        ],
        solutionImg: "Question/59/59.0.jpg"
    },
    {
        q: "60. ",
        img: "Question/60/60.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/60/60.4.jpg' },
            { text: '', img: 'Question/60/60.2.jpg' },
            { text: '', img: 'Question/60/60.3.jpg' },
            { text: '', img: 'Question/60/60.1.jpg' }
        ],
        solutionImg: "Question/60/60.0.jpg"
    },
    {
        q: "61. Что находит данная программа?",
        img: "Question/61/61.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/61/61.1.jpg' },
            { text: '', img: 'Question/50/50.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' }
        ],
        solutionImg: "Question/61/61.0.jpg"
    },
    {
        q: "62. ",
        img: "Question/62/62.jpg",
        img: "Question/62/62.0.0.jpg",
        answer: 0,
        options: [
            { text: '1 - первый замечательный предел', img: '' },
            { text: 'e - второй замечательный предел', img: '' },
            { text: '2 - третий замечательный предел', img: '' },
            { text: 'четвертый замечательный предел', img: '' }
        ],
        solutionImg: "Question/62/62.0.jpg"
    },
    {
        q: "63. ",
        img: "Question/63/63.jpg",
        answer: 0,
        options: [
            { text: 'e - второй замечательный предел', img: '' },
            { text: '1 - первый замечательный предел', img: '' },
            { text: '2 - третий замечательный предел', img: '' },
            { text: 'четвертый замечательный предел', img: '' }
        ],
        solutionImg: "Question/63/63.0.jpg"
    },
    {
        q: "64. ",
        img: "Question/64/64.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/64/64.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/29/29.1.jpg' }
        ],
        solutionImg: "Question/64/64.0.jpg"
    },
    { 
        q: "65. ",
        img: "Question/65/65.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/65/65.1.jpg' },
            { text: '', img: 'Question/27/27.1.jpg' },
            { text: '', img: 'Question/28/28.1.jpg' },
            { text: '', img: 'Question/29/29.1.jpg' }
        ],
        solutionImg: "Question/65/65.0.jpg"
    },
    {
        q: "66. ",
        img: "Question/66/66.jpg",
        answer: 0,
        options: [
            { text: '0', img: '' },
            { text: '1', img: '' },
            { text: '-1', img: '' },
            { text: '2', img: '' }
        ],
        solutionImg: "Question/66/66.0.jpg"
    },
    {
        q: "67. ",
        img: "Question/67/67.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/67/67.1.jpg' },
            { text: '', img: 'Question/61/61.1.jpg' },
            { text: '', img: 'Question/38/38.1.jpg' },
            { text: '', img: 'Question/36/36.1.jpg' }
        ],
        solutionImg: "Question/67/67.0.jpg"
    },
    { 
        q: "68. ",
        img: "Question/68/68.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/68/68.1.jpg' },
            { text: '', img: 'Question/67/67.1.jpg' },
            { text: '', img: 'Question/61/61.1.jpg' },
            { text: '', img: 'Question/38/38.1.jpg' }
        ],
        solutionImg: "Question/68/68.0.jpg"
    },
    {
        q: "69. ",
        img: "Question/69/69.jpg",
        answer: 0,
        options: [
            { text: '(3 ; 1)', img: '' },
            { text: '(1 ; 3)', img: '' },
            { text: '(0 ; 1)', img: '' },
            { text: '(0 ; -1)', img: '' }
        ],
        solutionImg: "Question/69/69.0.jpg"
    },
    {
        q: "70. ",
        img: "Question/70/70.jpg",
        answer: 0,
        options: [
            { text: '3/4', img: '' },
            { text: '1/2', img: '' },
            { text: '1/4', img: '' },
            { text: '1/3', img: '' }
        ],
        solutionImg: "Question/70/70.0.jpg"
    },
    {
        q: "71. ",
        img: "Question/71/71.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/71/71.1.jpg' },
            { text: '', img: 'Question/68/68.1.jpg' },
            { text: '', img: 'Question/67/67.1.jpg' },
            { text: '', img: 'Question/61/61.1.jpg' }
        ],
        solutionImg: "Question/71/71.0.jpg"
    },
    {
        q: "72. ",
        img: "Question/72/72.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/72/72.1.jpg' },
            { text: '', img: 'Question/68/68.1.jpg' },
            { text: '', img: 'Question/67/67.1.jpg' },
            { text: '', img: 'Question/61/61.1.jpg' }
        ],
        solutionImg: "Question/72/72.0.jpg"
    },
    {
        q: "73. ",
        img: "Question/73/73.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/73/73.1.jpg' },
            { text: '', img: 'Question/72/72.1.jpg' },
            { text: '', img: 'Question/71/71.1.jpg' },
            { text: '', img: 'Question/67/67.1.jpg' }
        ],
        solutionImg: "Question/73/73.0.jpg"
    },
    {
        q: "74. ",
        img: "Question/74/74.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/74/74.1.jpg' },
            { text: '', img: 'Question/73/73.1.jpg' },
            { text: '', img: 'Question/72/72.1.jpg' },
            { text: '', img: 'Question/71/71.1.jpg' }
        ],
        solutionImg: "Question/74/74.0.jpg"
    },
    {
        q: "75. ",
        img: "Question/75/75.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/75/75.1.jpg' },
            { text: '', img: 'Question/74/74.1.jpg' },
            { text: '', img: 'Question/73/73.1.jpg' },
            { text: '', img: 'Question/72/72.1.jpg' }
        ],
        solutionImg: "Question/75/75.0.jpg"
    },
    {
        q: "76. ",
        img: "Question/76/76.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/76/76.1.jpg' },
            { text: '', img: 'Question/75/75.1.jpg' },
            { text: '', img: 'Question/74/74.1.jpg' },
            { text: '', img: 'Question/73/73.1.jpg' }
        ],
        solutionImg: "Question/76/76.0.jpg"
    },
    {
        q: "77. ",
        img: "Question/77/77.jpg",
        answer: 0,
        options: [
            { text: '5', img: '' },
            { text: '4', img: '' },
            { text: '6', img: '' },
            { text: '3', img: '' }
        ],
        solutionImg: "Question/77/77.0.jpg"
    },
    {
        q: "78. ",
        img: "Question/78/78.jpg",
        answer: 0,
        options: [
            { text: '1/6', img: '' },
            { text: '1/4', img: '' },
            { text: '1/2', img: '' },
            { text: '1/3', img: '' }
        ],
        solutionImg: "Question/78/78.0.jpg"
    },
    {
        q: "79. ",
        img: "Question/79/79.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/79/79.1.jpg' },
            { text: '', img: 'Question/76/76.1.jpg' },
            { text: '', img: 'Question/75/75.1.jpg' },
            { text: '', img: 'Question/74/74.1.jpg' }
        ],
        solutionImg: "Question/79/79.0.jpg"
    },
    {
        q: "80. ",
        img: "Question/80/80.jpg",
        answer: 0,
        options: [
            { text: '', img: 'Question/80/80.1.jpg' },
            { text: '', img: 'Question/79/79.1.jpg' },
            { text: '', img: 'Question/76/76.1.jpg' },
            { text: '', img: 'Question/75/75.1.jpg' }
        ],
        solutionImg: "Question/80/80.0.jpg"
    },
    {
        q: "81. ",
        img: "Question/81/81.jpg",
        answer: 0,
        options: [
            { text: 'комплексные числа', img: '' },
            { text: 'вещественные числа', img: '' },
            { text: 'иррациональные числа', img: '' },
            { text: 'рациональные числа', img: '' }
        ],
        solutionImg: "Question/81/81.0.jpg"
    },
    {
        q: "82. ",
        img: "Question/82/82.jpg",
        answer: 0,
        options: [
            { text: '(4a - 6bi)(4a + 6bi)', img: '' },
            { text: '(4a + 6bi)(4a - 6bi)', img: '' },
            { text: '(4a - 6bi)(4a - 6bi)', img: '' },
            { text: '(4a + 6bi)(4a + 6bi)', img: '' }
        ],
        solutionImg: "Question/82/82.0.jpg"
    },
    {
        q: "83. ",
        img: "Question/83/83.jpg",
        answer: 0,
        options: [
            { text: 'i', img: '' },
            { text: 'e', img: '' },
            { text: 'p', img: '' },
            { text: 't', img: '' }
        ],
        solutionImg: "Question/83/83.0.jpg"
    },
    {
        q: "84. ",
        img: "Question/84/84.jpg",
        answer: 0,
        options: [
            { text: '(ac + bd)(bc + ad)i', img: '' },
            { text: '(ac + bd)(bc + ad)i', img: '' },
            { text: '(ac + bd)(bc - ad)i', img: '' },
            { text: '(ac - bd)(bc - ad)i', img: '' }
        ],
        solutionImg: "Question/84/84.0.jpg"
    },
    {
        q: "85. ",
        img: "Question/85/85.jpg",
        answer: 0,
        options: [
            { text: '√34', img: '' },
            { text: '√17', img: '' },
            { text: '√25', img: '' },
            { text: '√15', img: '' }
        ],
        solutionImg: "Question/85/85.0.jpg"
    }
];