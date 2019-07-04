export function commentNode(el, vnode) {
  const comment = document.createComment(' ')

  Object.defineProperty(comment, 'setAttribute', {
    value: () => undefined
  })

  vnode.text = ' '
  vnode.elm = comment
  vnode.isComment = true
  vnode.context = undefined
  vnode.tag = undefined
  vnode.data.directives = undefined

  if (vnode.componentInstance) {
    vnode.componentInstance.$el = comment
  }

  if (el.parentNode) {
    el.parentNode.replaceChild(comment, el)
  }
}

// export function collapse() {
//   const $collapseHead = $('.JS-collapse-head')
//   $collapseHead.each(function () {
//     const self = $(this)
//     if (!self.hasClass('open')) {
//       const collapse = self.closest('.JS-collapse')
//       collapse.find('.JS-collapse-content').hide()
//     }
//   })
//   $collapseHead.click(function (e) {
//     e.preventDefault()
//     const self = $(this)
//     self.toggleClass('open')
//     const $collapse = self.closest('.JS-collapse')
//     const $collapseContent = $collapse.find('.JS-collapse-content')
//     $collapseContent.slideToggle(300)
//   })
// }

// export function toggleItems() {
//   $('.JS-toggle-link').click(function (e) {
//     e.preventDefault()
//     const $toggleContainer = $(this).closest('.JS-toggle-container')
//     $toggleContainer.find('.JS-toggle-open').toggleClass('open')
//   })
// }

// export function closeItems() {
//   $(document).click(function (event) {
//     const con = $('.JS-toggle-link')
//     if (!con.is(event.target) && con.has(event.target).length === 0) {
//       const $toggleContainer = con.closest('.JS-toggle-container')
//       $toggleContainer.find('.JS-toggle-open').removeClass('open')
//     }
//   })
// }
