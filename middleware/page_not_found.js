const page_not_found_message = "Page not found!";
const page_not_found = (req,res) => {
    res.send(page_not_found_message);
}

module.exports = page_not_found;