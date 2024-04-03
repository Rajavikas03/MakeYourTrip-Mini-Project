function passSelectedOption() {
    const destination = document.querySelector(".destination").value;
    const days = document.querySelector(".days").value;
    const averagePrice = document.querySelector(".average-price").value;
  
    const queryParams = new URLSearchParams({
      destination,
      days,
      averagePrice,
    }).toString();
  
    window.location.href = `index2.html?${queryParams}`;
  }