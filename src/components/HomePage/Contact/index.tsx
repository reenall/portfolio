
export default function Contact() {
  return (
    <section id="contact" className="py-44">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-start mb-20">
            <h4 className="first-title-stripe">Contact</h4>
            <h2 className="second-title">Feel free to contact me</h2>
          </div>
        </div>

        <div className="flex flex-wrap px-4">
          {/* <!-- Left Contact --> */}
          <div className="w-full pb-32 lg:pb-0 lg:w-1/2">
            <form action="https://formspree.io/f/meqyzklr" method="post">
              <div className="w-full mx-auto text-sm">
                <div className="mb-8">
                  <input type="text" id="name" name="name" placeholder="name" className="contact-input" />
                </div>
                <div className="mb-8">
                  <input type="email" id="email" name="email" placeholder="e-mail *" className="contact-input" required />
                </div>
                <div className="mb-20">
                  <textarea id="message" name="message" placeholder="message" className="contact-input h-32 resize-none"></textarea>
                </div>

                <div>
                  <button type="submit" className="btn w-full md:w-3/5 py-2 rounded-full shadow-lg dark:shadow-none" onclick="return confirm('Want to send this message?')">Send message</button>
                </div>
              </div>
            </form>
          </div>

          {/* <!-- Right Contact --> */}
          <div className="w-full lg:w-1/2 flex mx-auto justify-center">
            <div>
              <h3 className="right-contact-title relative pl-[40px] font-light text-primaryIconColor before:bg-primaryIconColor mb-10 dark:text-darkPrimaryIconColor dark:before:bg-darkPrimaryIconColor">Or directly through my main contact</h3>
              {/* <!-- E-mail --> */}
              <a href="mailto:muhammadrenaldi588@gmail.com" target="_blank" className="flex gap-8 mb-10 group">
                <div className="w-14 h-14 bg-bgThird rounded-xl flex items-center justify-center drop-shadow-mdCustom dark:drop-shadow-none">
                  <svg viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                </div>
                <div className="grid items-center">
                  <h3 className="text-secondary group-hover:text-primaryIconColor dark:text-darkSecondary dark:group-hover:text-darkPrimaryIconColor">E-mail</h3>
                  <p className="text-sm text-secondary dark:text-darkSecondary group-hover:text-primaryIconColor dark:group-hover:text-darkPrimaryIconColor">muhammadrenaldi588@gmail.com</p>
                </div>
              </a>
              {/* <!-- Whatsapp --> */}
              <a href="https://wa.me/6281510604262" target="_blank" className="flex flex-wrap gap-8 group w-max">
                <div className="w-14 h-14 bg-bgThird rounded-xl flex items-center justify-center drop-shadow-mdCustom dark:drop-shadow-none">
                  <svg viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
                    />
                  </svg>
                </div>
                <div className="grid items-center">
                  <h3 className="text-secondary group-hover:text-primaryIconColor dark:text-darkSecondary dark:group-hover:text-darkPrimaryIconColor">WhatsApp</h3>
                  <p className="text-xs tracking-wider text-secondary group-hover:text-primaryIconColor dark:text-darkSecondary dark:group-hover:text-darkPrimaryIconColor">(+62) 815-1060-4262</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
