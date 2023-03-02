import classes from './index.module.css'

export default function CenteredBrandText() {
  return (
    <section className={classes.CenteredBrandText}>
      <div className="textBlock">
        <h2 className="gradient-text">CMW is an all-in-</h2>
        <h2 className="gradient-text">Solution</h2>
      </div>
      <div className="textBlock">
        <h2 className="gradient-text">Loved by the leading</h2>
        <h2 className="gradient-text">Manufacturing Companies in the world.</h2>
      </div>
    </section>
  )
}
