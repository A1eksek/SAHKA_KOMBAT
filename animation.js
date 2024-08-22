document.getElementById('Home_butt').addEventListener('click', function(){
        // Уменьшаем кнопку
        this.style.transform = 'scale(1.1) translateY(-5px)'; // 80% от оригинального размера

        // Возвращаем кнопку в обычное состояние через 200 мс
        setTimeout(() => {
            this.style.transform = 'scale(1) translateY(0)';
        }, 100); 
})
