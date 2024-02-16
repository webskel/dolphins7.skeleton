# frozen_string_literal: true

module Twenty
  def self.build
    File.expand_path File.join(__dir__, "..", "build")
  end
end
