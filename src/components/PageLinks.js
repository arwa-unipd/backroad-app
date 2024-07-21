import PageLink from "./PageLink"
const PageLinks = ({pageLinks,parentClass,itemClass}) => {
  return (
    <ul className={parentClass} >
    {pageLinks.map((link) => {
      return (
        <PageLink key={link.id} {...link} itemClass={itemClass}/>
      )
    })}
  </ul>
  )
}

export default PageLinks
