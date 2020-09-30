const repairPopup = () => {
    const getData = (outputDate, errorDate) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'db/db.json');
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                outputDate(data);
            } else {
                errorDate();
            }
        });
        request.send();
    };

    const popupRepair = document.querySelector('.popup-repair-types');
    const popupRepairNav = document.querySelector('.nav-list-popup-repair');
    const popupRepairTitle = document.querySelector('.popup-repair-types-content__head-title');

    const getBtn = (data) => {
        popupRepairNav.textContent = '';
        data.forEach((item) => {
            for (let key in item) {
                if (key === 'title') {
                    let newBtn = document.createElement('button');
                    newBtn.classList.add('button_o');
                    newBtn.classList.add('popup-repair-types-nav__item');                    
                    newBtn.textContent = item[key];                   
                    popupRepairNav.append(newBtn);
                }
            }
        });

    };

    const clearContent = () => {
        const tableContent = document.querySelector('.popup-repair-types-content-table');
        tableContent.textContent = '';
        let newTable = document.createElement('table');
        newTable.classList.add('popup-repair-types-content-table__list');
        tableContent.append(newTable);
        let newTbody = document.createElement('tbody');
        newTbody.classList.add('popup-repair-tbody');
        newTable.append(newTbody); 
    };

    const getContent = (data, str) => {
        let price = [];
        const btn = document.querySelectorAll('.popup-repair-types-nav__item');
        btn.forEach((item)=>{
            item.classList.remove('active');
        });
        data.forEach((item,index) => {
            for (let key in item) {
                if (key === 'title') {
                    if (item[key] === str) {
                        price = item.priceList;
                        btn[index-1].classList.add('active');
                    }  
                }
            }
        });
        const table = document.querySelector('.popup-repair-tbody');
        
        price.forEach((item) => {
            let newTr = document.createElement('tr');
            newTr.classList.add('mobile-row');
            table.append(newTr);
            let newTd = document.createElement('td');
            newTd.classList.add('repair-types-name');
            newTd.textContent = item.typeService;
            newTr.append(newTd);
            newTd = document.createElement('td');
            newTd.classList.add('repair-types-value');
            newTd.textContent = item.units;
            newTr.append(newTd);
            newTd = document.createElement('td');
            newTd.classList.add('repair-types-value');
            newTd.textContent = item.cost;
            newTr.append(newTd);
        });

    };

    const progressDate = (data) => {
        getBtn(data);
        clearContent();
        getContent(data, 'Потолок: Демонтажные работы');
        popupRepair.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.popup-repair-types-nav__item') !== null) {
                target = target.closest('.popup-repair-types-nav__item');
                popupRepairTitle.textContent = target.textContent;
                clearContent();
                getContent(data, target.textContent);
            }
        });
    };

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.no-overflow') !== null || target.closest('.link-list-repair') !== null) {
            popupRepair.style.visibility = 'visible';
            getData(
                (data) => progressDate(data),
                () => console.log('Произошла ошибка, данные не доступны...')
            );
        } else {
            if (target.closest('.popup-dialog') === null) {
                popupRepair.style.visibility = '';
            }
        }

    });

};

export default repairPopup;