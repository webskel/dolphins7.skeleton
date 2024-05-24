# frozen_string_literal: true

module Twenty
  ##
  # @return [String]
  #  Returns an absolute path to the nanoc build/ directory
  def self.build
    File.realpath File.join(__dir__, "..", "..", "build")
  end
end
