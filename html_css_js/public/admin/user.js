document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("searchInput");
    var table = document.querySelector("table");
    searchInput.addEventListener("input", function () {
        var query = searchInput.value.trim().toLowerCase();
        if (table) {
            var rows = table.querySelectorAll("tbody tr");
            rows.forEach(function (row) {
                var _a;
                var itemNameCell = row.querySelector("td:first-child");
                if (itemNameCell) {
                    // Narrowing: TypeScript understands that itemNameCell is not null or undefined here.
                    var itemName = (_a = itemNameCell.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                    if (itemName) {
                        // Further narrowing: TypeScript infers the type of itemName as string | null.
                        // The code is safe from null or undefined errors.
                        var shouldShow = itemName.includes(query);
                        // Cast 'row' to HTMLTableRowElement to access 'style' property
                        // Narrowing: TypeScript understands that you've narrowed the type of row to HTMLTableRowElement
                        // within this specific block, allowing you to access the style property safely.
                        row.style.display = shouldShow ? "" : "none";
                    }
                    else {
                        // Narrowing: Similar to the previous block, TypeScript knows that row is of type HTMLTableRowElement.
                        row.style.display = "none";
                    }
                }
            });
        }
    });
});
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(42);
var stringBox = new Box("Hello");
