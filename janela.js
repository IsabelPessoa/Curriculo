document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.win-btn.close');
    const modalContent = document.getElementById('draggable');
    const header = document.getElementById('modal-header');

    // Abrir modal
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar clicando fora
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tornar arrastável
    function makeDraggable(modal, header) {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - modal.offsetLeft;
            offsetY = e.clientY - modal.offsetTop;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                modal.style.left = `${e.clientX - offsetX}px`;
                modal.style.top = `${e.clientY - offsetY}px`;
            }
        });
    }

    makeDraggable(modalContent, header);
});