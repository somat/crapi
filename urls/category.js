let url = {}

url.base = '/'
url.category = url.base.concat('category/')
url.category_list = url.category.concat('list')
url.category_view = url.category.concat('view')

module.exports = url
