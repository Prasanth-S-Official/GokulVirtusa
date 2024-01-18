document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const table = document.querySelector("table");
  
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();
  
      if (table) {
        const rows = table.querySelectorAll("tbody tr");
  
        rows.forEach((row) => {
          const itemNameCell = row.querySelector("td:first-child");
  
          if (itemNameCell) {
             // Narrowing: TypeScript understands that itemNameCell is not null or undefined here.
            const itemName = itemNameCell.textContent?.toLowerCase();
            
            if (itemName) {
                // Further narrowing: TypeScript infers the type of itemName as string | null.
             // The code is safe from null or undefined errors.
              const shouldShow = itemName.includes(query);
  
              // Cast 'row' to HTMLTableRowElement to access 'style' property
               // Narrowing: TypeScript understands that you've narrowed the type of row to HTMLTableRowElement
               // within this specific block, allowing you to access the style property safely.
              (row as HTMLTableRowElement).style.display = shouldShow ? "" : "none";
              
            } else {
                 // Narrowing: Similar to the previous block, TypeScript knows that row is of type HTMLTableRowElement.
              (row as HTMLTableRowElement).style.display = "none";
            }
          }
        });
      }
    });
  });
  

  