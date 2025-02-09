document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".mobile-nav-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });
});

function buyProduct(id) {
    const paymentMethod = confirm("Pilih metode pembayaran:\nOK - E-Wallet\nCancel - WhatsApp") ?
        handleEWalletPayment(id) :
        handleWhatsAppOrder(id);
}

function handleEWalletPayment(id) {
    alert("Anda akan diarahkan ke pembayaran e-wallet untuk Produk " + id);
}

function handleWhatsAppOrder(id) {
    const message = `Halo, saya ingin membeli produk ${id}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
}

function openMarketplace(id) {
    const marketplaces = {
        tokopedia: "https://www.tokopedia.com/tokokita",
        shopee: "https://shopee.co.id/tokokita",
        bukalapak: "https://www.bukalapak.com/tokokita"
    };
    
    const choice = prompt("Pilih marketplace (tokopedia/shopee/bukalapak):");
    if (marketplaces[choice]) {
        window.open(marketplaces[choice], '_blank');
    }
}

function viewCart() {
    alert("Fitur keranjang belanja akan segera hadir!");
}
