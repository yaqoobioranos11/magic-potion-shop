document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
    let playerName = prompt("سلام اسم خودت را وارد کن:");
    let playerAge = Number(prompt("سن خودت را وارد کن:"));
    let favoriteElement = prompt("عنصر مورد علاقه ات را انتخاب کن (آتش, آب, خاک, هوا):");
    alert(`خوش آمدی ${playerName}! در سن
    ${playerAge}, تو آماده ای که قدرت های ${favoriteElement} را یاد بگیری`);
 
    let potions = ["معجون شفا", "معجون انرژی", "معجون نامرئی", "معجون مقاومت آتش"];
    let potionStock = {
        "معجون شفا": { quantity: 5, price: 10 },
        "معجون انرژی": { quantity: 3, price: 15 },
        "معجون نامرئی": { quantity: 2, price: 25 },
        "معجون مقاومت آتش": { quantity: 4, price: 20 }
    };
    let playerGold = 0;

    for (let i = 1; i <= 3; i++) {
        let customer = prompt("یک مشتری آمده! آیا میخوای سفارش بگیری؟ (yes/no)");
        if (customer) {
            customer = customer.toLowerCase().trim();
        } else {
            customer = "no";
        }

        if (customer === "yes") {
            let menu = potions.map(p => `${p} - موجود: ${potionStock[p].quantity} - قیمت: ${potionStock[p].price} طلا`).join("\n");
            let order = prompt(`کدام معجون را سفارش می‌دهی؟\n${menu}`);

            if (potionStock[order] && potionStock[order].quantity > 0) {
                potionStock[order].quantity--;
                playerGold += potionStock[order].price;
                alert(`معجون ${order} داده شد! تو اکنون ${playerGold} طلا داری.`);
            } else {
                alert(`متأسفانه معجون ${order} در انبار موجود نیست!`);
            }
        } else {
            alert("باشه، مشتری بعدی آماده است.");
        }
    }

    
    let stockReport = potions.map(p => `${p}: ${potionStock[p].quantity}`).join("\n");
    alert(`روز تمام شد! تو ${playerGold} طلا جمع 
    کردی و داروهای باقی مانده درانبار`);
    
}

