        document.querySelectorAll('.tabs a').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(section => {
                    section.classList.remove('active');
                });
                document.querySelectorAll('.content').forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementsById(this.getAttribute('data-target')).forEach(section =>{
                        section.classList.add('active')
                });
            });
        });
