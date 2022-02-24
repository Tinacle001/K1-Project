import React from 'react'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import './styles.css'
const TermsPrivacy = ({ img, title, date }) => {
  return (
    <div>
      <SweetNav other />
      <div className='privacy'>
        <h1>Terms of Service</h1>
        <div className='privacy-box'>
          <h4>What’s in these terms?</h4>
          <p>
            This index is designed to help you understand some of the key
            updates we’ve made to our Terms of Service (Terms). We hope this
            serves as a useful guide, but please ensure you read the Terms in
            full.{' '}
          </p>
          <h4> Welcome to YouTube!</h4>
          <p>
            This section outlines our relationship with you. It includes a
            description of the Service, defines our Agreement, and names your
            service provider.{' '}
          </p>
          <h4>Who May Use the Service? </h4>
          <p>
            This section sets out certain requirements for use of the Service,
            and defines categories of users.{' '}
          </p>
          <h4>Your Use of the Service</h4>
          <p>
            This section explains your rights to use the Service, and the
            conditions that apply to your use of the Service. It also explains
            how we may make changes to the Service.{' '}
          </p>
          <h4>Your Content and Conduct</h4>
          <p>
            This section applies to users who provide Content to the Service. It
            defines the scope of the permissions that you grant by uploading
            your Content, and includes your agreement not to upload anything
            that infringes on anyone else’s rights.{' '}
          </p>
          <h4>Account Suspension and Termination</h4>
          <p>
            This section explains how you and YouTube may terminate this
            relationship.{' '}
          </p>
          <h4>About Software in the Service</h4>
          <p>This section includes details about software on the Service.</p>
          <h4>Other Legal Terms</h4>
          <p>
            This section includes our service commitment to you. It also
            explains that there are some things we will not be responsible for.{' '}
          </p>
          <h4>About this Agreement</h4>
          <p>
            This section includes some further important details about our
            contract, including what to expect if we need to make changes to
            these Terms; or which law applies to them.
          </p>
        </div>
        <h4>Your Use of the Service</h4>
        <p>Content on the Service</p>
        <p>
          The content on the Service includes videos, audio (for example music
          and other sounds), graphics, photos, text (such as comments and
          scripts), branding (including trade names, trademarks, service marks,
          or logos), interactive features, software, metrics, and other
          materials whether provided by you, or a third party (collectively,
          "Content”). Content may be provided to the Service and distributed by
          our users and YouTube is a provider of hosting services for such
          Content. Content is the responsibility of the person or entity that
          provides it to the Service. If you see any Content you believe does
          not comply with this Agreement, such as by violating the Community
          Guidelines or the law, you can report it to us.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default TermsPrivacy
