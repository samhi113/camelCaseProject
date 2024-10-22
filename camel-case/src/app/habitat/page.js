import BottomNav from "@/components/BottomNav";
export default function habitat() {
  return (
    <main>
      <h1>Habitat</h1>
      <p>
        Bactrian camels live in Central Asia, while dromedary camels live in
        North Africa and the Middle East.
      </p>
      <p>Wild bactrian camels live in south Mongolia and northern China.</p>
      <p>
        They are all typically found in desert regions, although they may also
        live in other similar environments like prairies.
      </p>
      <p>
        While we associate camels with extremely hot temperature environments,
        their habitat can also include extremely low temperature environments.
      </p>
      <span>
        They form a protective coat in the winter to help with the cold and shed
        the coat in the summer months.
      </span>
      <BottomNav
        item1="home"
        href1=""
        item2="facts"
        href2="/habitat"
        item3="gallery"
        href3="/gallery"
      />
    </main>
  );
}
