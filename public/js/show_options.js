const menus = document.querySelectorAll('.actions-menu');

menus.forEach(menu => {

    const button = menu.querySelector('.btn-three-dots');
    const dropdown = menu.querySelector('.actions-dropdown');

    button.addEventListener('click', (event) => {

        event.stopPropagation();

        document.querySelectorAll('.actions-dropdown').forEach(otherDropdown => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('show');
            }

        });

        dropdown.classList.toggle('show');
    });

});

document.addEventListener('click', () => {

    document.querySelectorAll('.actions-dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });

});
const deleteButtons = document.querySelectorAll('.delete-offer');

deleteButtons.forEach(button => {

    button.addEventListener('click', async () => {

        const id = button.dataset.id;

        const confirmation = confirm(
            'Voulez-vous vraiment supprimer cette offre ?'
        );

        if (!confirmation) {
            return;
        }

        const response = await fetch(`/offers/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {

            const card = button.closest('.job-card');

            card.remove();
        }

    });

});